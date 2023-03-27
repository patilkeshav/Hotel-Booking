import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListsComponent } from './modules/customer/hotel-lists/hotel-lists.component';
import { LandingPageComponent } from './modules/customer/landing-page/landing-page.component';

const routes: Routes = [{
  path:"home",component:LandingPageComponent
},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:"hotelList/:id",component:HotelListsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
