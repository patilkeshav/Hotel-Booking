import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-hotel-preferences',
  templateUrl: './hotel-preferences.component.html',
  styleUrls: ['./hotel-preferences.component.scss']
})
export class HotelPreferencesComponent implements OnInit {
  // getLocationData: any;
  filterData: any = [];
  packageName: any = [];
  hotelListData: any = []

  @Input()
  getLocationData: any = [];
  constructor(private http: HttpService,private router:Router,private locationService:LocationService) {
  }

  ngOnInit(): void {
    this.getLocations();
    // this.showHotels("hotel");
    this.gethotelList();
  }
  getLocations() {
    this.http.getDataFromServer("hotelLocations").subscribe((responce: any) => {
      if (responce && responce.length) {
        this.getLocationData = responce;
        console.log("getlocation", this.getLocationData)
      }
    },
      error => {
        console.log(error)
      })
  }

  gethotelList() {
    this.http.getDataFromServer("hotels").subscribe((responce: any) => {
      if (responce && responce.length > 0)
        this.hotelListData = responce;
      console.log("hotelLists", this.hotelListData)
    })
  }
  // showHotels(hotel:any){
  //   const tempArr:any=[];
  //   for(let i=0;i<this.hotelListData.length;i++){
  //     const item=this.hotelListData[i];
  //     const data=item.locationName.filter((el:any)=>el.location==hotel.location);
  //     if(data && data.length>0){
  //       tempArr.push(data);
  //       this.filterData=tempArr;
  //        this.router.navigate(['/hotelList'])
  //       console.log("filterData",this.filterData)
        
  //     }
     
  // }
  
}
