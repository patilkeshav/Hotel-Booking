import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hotel-preferences',
  templateUrl: './hotel-preferences.component.html',
  styleUrls: ['./hotel-preferences.component.scss']
})
export class HotelPreferencesComponent implements OnInit {
  // getLocationData: any;
  filterData:any=[];
  packageName:any=[];

  @Input()
  getLocationData:any=[];

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.getLocations();
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
//   getPackagesName(){
//     this.http.getDataFromServer("packages").subscribe((el:any)=>{
//       if(el && el.length>0){
//        this.packageName=el;
//        console.log("packageName",this.packageName)
//       }
//     })
//    }
//   filteredData(hotelPackages:any){
//     this.filterData=this.getLocationData.map((el:any)=>el.packageType.filter((el:any)=>el.name===hotelPackages.name))
//     console.log("filterData",this.filterData)
//   this.hotelList.push(this.filterData)}
  
// }
}