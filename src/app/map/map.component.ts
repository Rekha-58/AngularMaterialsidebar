
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;
  marker: any;
 polygon:any;
 circle:any;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 13.14, 79.89 ],
      zoom: 13
    });
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{

    })
    tiles.addTo(this.map)
    /*this. marker = L.marker([13.14,79.89]);
     this.marker.bindPopup('hi there').openPopup();
     this.marker.addTo(this.map)*/
     this.polygon= L.polygon([
      [13.25, 79.92],
      [13.9, 78.92],
      [13.50, 82.72]
  ]);
  this.polygon.bindPopup('I am polygon').openPopup();
  this.polygon.addTo(this.map);
  this.circle = L.circle([13.14,79.89]); 
this.circle.bindPopup('I am circle').openPopup();
this.circle.addTo(this.map);

  
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}