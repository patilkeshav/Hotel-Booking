import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
 packageName:any=[]
 selectedPackages:any;
 getLocationData:any=[];
 hotelLocations:any=[];
 selectedLocations:any;
 filterData:any=[];
 showLocation:boolean=false;
 showAlllocations:boolean=true;
  constructor(private http:HttpService,private locationService:LocationService,private router:Router ){}
 ngOnInit(): void {
  this.getPackagesName();
  this.getHotelLocations()
  
 }
 getHotelLocations() {
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
 getPackagesName(){
  this.http.getDataFromServer("packages").subscribe((el:any)=>{
    if(el && el.length>0){
     this.packageName=el;
     console.log("packageName",this.packageName)
    }
  })
 }
 showPackages(hotelPackages:any){

  const tempArr:any=[];
  for(let i=0;i<this.getLocationData.length;i++){
    const item=this.getLocationData[i];
    const data=item.packageType.filter((el:any)=>el.name ==hotelPackages.name);
    if(data && data.length>0){
      tempArr.push(item);
      this.filterData=tempArr;
      console.log("filterData",tempArr)
      this.showLocation=true;
      this. showAlllocations=false;
    }
   
    

  }
//    let produArr:any[]=[];
//     this.selectedPackages=hotelPackages;
//     this.showLocation=true
//    
//     console.log("selected packages",hotelPackages)
//  this.filterData=this.getLocationData.map((el:any)=>el.packageType.filter((el:any)=>el.name===hotelPackages.name))
//  if(this.filterData){
//   console.log("product",this.filterData)
//  }

     
 }
 selectedDate(ev:any){
 console.log("selectedDate",ev.target.value)
 }
 showLocations(hotel:any){
 this.selectedLocations=hotel.target.value
//  if(this.selectedLocations==this.getLocationData.location){}
  console.log("selected location",this.selectedLocations)



 }
 onLocationChange(selectedLocation:any){
  let selectedlocation=selectedLocation.target.value
  this.locationService.setSelectedLocation(selectedlocation)
  console.log("selected location",selectedlocation)

}
 }
 
 

