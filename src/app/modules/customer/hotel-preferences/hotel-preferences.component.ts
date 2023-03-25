import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-preferences',
  templateUrl: './hotel-preferences.component.html',
  styleUrls: ['./hotel-preferences.component.scss']
})
export class HotelPreferencesComponent implements OnInit{
  @Input() 
  hotelList:any=[];
  getLocationData:any=[];
  constructor(private http:HttpService){
  }
  
  ngOnInit(): void {
    this. getLocations();
  }
  getLocations(){
    this.http.getDataFromServer("hotelLocations").subscribe((responce:any)=>{
      if(responce && responce.length){
           this.getLocationData=responce;
           console.log("getlocation",this.getLocationData)}
    },
    error=>{
      console.log(error)
    })
    }
}
