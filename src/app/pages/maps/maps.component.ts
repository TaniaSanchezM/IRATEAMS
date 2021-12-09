import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapService } from '../../shared/map.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  public map:Map;
  constructor(public mapService:MapService) { }
  public provider:OpenStreetMapProvider = new OpenStreetMapProvider({
    params: {
      'accept-language': 'es', // render results in Spanish
      countrycodes: 'es', // limit search results to Spain
      addressdetails: 1, // include additional address detail parts
    }
  });
  async addMarkers(){
    this.mapService.getEvents().subscribe((data:any)=>{
      let allEvents = data.resultado;
      for (const event of allEvents) {
        
        let res: string = event.direccion + "," + event.localidad
        this.getCoords(res)
        .then((coords)=>{
          marker([coords.latitud,coords.longitud]).addTo(this.map)
          .bindPopup(event.titulo);
        })
        .catch(err =>{
          console.error(err);
        })
        
      }
    });
    
  }
  async mostrar(value: string){
    console.log(value)
   let coords:any = await this.getCoords(value + ", España");    
   this.map.setView([coords.latitud,coords.longitud],16);  
  }
  async getCoords(lugar:string):Promise<any> {
    
    let result = await this.provider.search({ query: lugar });
    let coords:any = {latitud:result[0].y,longitud:result[0].x};    
    console.log(result);
    console.log(coords);

    return coords;  
  }
  ngAfterViewInit(): void {
    this.map = new Map('map').setView([40.4167047, -3.7035825], 16.6);
    tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);
    this.addMarkers()
  }
  ngOnInit(): void {
  }

}
