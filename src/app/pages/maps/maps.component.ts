import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  public map:Map;
  constructor() { }
  public provider:OpenStreetMapProvider = new OpenStreetMapProvider({
    params: {
      'accept-language': 'es', // render results in Spanish
      countrycodes: 'es', // limit search results to Spain
      addressdetails: 1, // include additional address detail parts
    }
  });
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
    console.log("pruebaaaaaa" + coords)  
    return coords;  
  }
  ngAfterViewInit(): void {
    this.map = new Map('map').setView([40.4167047, -3.7035825], 16.6);
    tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);
  }
  ngOnInit(): void {
  }

}
