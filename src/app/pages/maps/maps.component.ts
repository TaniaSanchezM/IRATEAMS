import { Component, OnInit } from '@angular/core';
import { Icon, Map, Marker, marker, tileLayer } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapService } from '../../shared/map.service';
import { EventosService } from '../../shared/eventos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public map:Map;
  public redIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  public orangeIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  public mysearch;
  constructor(public mapService:MapService, private evtService:EventosService, private router:Router) { }
  public provider:OpenStreetMapProvider = new OpenStreetMapProvider({
    params: {
      'accept-language': 'es', // render results in Spanish
      countrycodes: 'es', // limit search results to Spain
      addressdetails: 1, // include additional address detail parts
    }
  });
  redireccion(evn){
    console.log('entra en el evento')
    if(evn.target.classList.contains('popupMarker')){
      this.evtService.eventoId = evn.target.id
      this.router.navigate(['/event-details'])
    }
  }
  async addMarkers(){
    this.mapService.getEvents().subscribe((data:any)=>{
      let allEvents = data.resultado;
      for (const event of allEvents) {
        let res: string = event.direccion + " "+ event.localidad
        this.getCoords(res)
        .then((coords)=>{
          marker([coords.latitud,coords.longitud]).addTo(this.map)
          .bindPopup(`<div id="${event.id_evento}" class="popupMarker">${event.titulo}</div>`); //No se como hacer que al clickar en el texto te lleve al evento
        })
        .catch(err =>{
          console.error(err);
        })
        
      }
    });
    
  }
  async mostrar(value: string){
   let coords:any = await this.getCoords(value + ", Espa??a");    
   this.map.setView([coords.latitud,coords.longitud],16.6);
   this.mysearch.remove()
   this.mysearch =  marker([coords.latitud,coords.longitud], {icon: this.redIcon}).addTo(this.map)
   .bindTooltip("Tu busqueda").openTooltip();
  }
  async getCoords(lugar:string):Promise<any> {
    let result = await this.provider.search({ query: lugar });
    let coords:any = {latitud:result[0].y,longitud:result[0].x};    
    return coords;  
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          this.map.setView([lat,lng],16.6);
          this.mysearch.remove()
          this.mysearch =  marker([lat,lng], {icon: this.orangeIcon}).addTo(this.map)
          .bindTooltip("Estas aqui").openTooltip();
        }
      },
      (error) => console.error(error));
    }
  }
  ngAfterViewInit(): void {
      this.map = new Map('map').setView([40.4167047, -3.7035825], 16.6);
    tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);
    this.addMarkers()
    this.mysearch =  marker([-69.0041712,39.5814979])
      .bindTooltip("Tu busqueda").openTooltip(); 
  }
  ngOnInit(): void {
    this.getLocation();
  }

}
