import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
 packageName:any=[]
 selectedPackages:any;
 getLocationData:any=[]
  constructor(private http:HttpService,){}
 ngOnInit(): void {
  this.getPackagesName();
  
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
    this.selectedPackages=hotelPackages;
    console.log("selected packages",hotelPackages)
    
 

 }

}
