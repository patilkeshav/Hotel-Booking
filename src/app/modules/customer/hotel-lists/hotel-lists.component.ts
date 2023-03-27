import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-hotel-lists',
  templateUrl: './hotel-lists.component.html',
  styleUrls: ['./hotel-lists.component.scss']
})
export class HotelListsComponent implements OnInit {
  hotelListData:any=[];
  selectedLocationData:any;
  location:any=[];
  constructor(private http:HttpService,private locationService:LocationService) { }
  ngOnInit(): void {
    this. gethotelLocation();
      this.gethotelList();
  
  }
  gethotelList(){
    this.http.getDataFromServer("hotels").subscribe((responce:any)=>{
      if(responce && responce.length>0)
      this.hotelListData=responce;
      // console.log("hotelLists",this.hotelListData)
    })
  }
  gethotelLocation(){
    this.locationService.getSelectedLocation().subscribe((selectedLocation:any)=>{
  
       this. filterHotels(selectedLocation)
         })
  }
  filterHotels(selectedlocation:any) {

    this.selectedLocationData= this.hotelListData.filter((hotel:any) => hotel.location ==selectedlocation);
    if(this.selectedLocationData && this.selectedLocationData.length>0){
    this.location.push(this.selectedLocationData)
    console.log("selectedlocationHotels",this.location)
  }
}
}