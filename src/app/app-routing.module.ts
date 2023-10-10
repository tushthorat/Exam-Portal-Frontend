import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [ 
  {
  path:'navbar',
  component:NavbarComponent,
  pathMatch:'full'
} ,
  {
  path:'signup',
  component:SignupComponent,
  //pathMatch:'full'
  } ,
  {
  path:'login',
  component:LoginComponent,
  //pathMatch:'full'
}
  , 
 
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
 

                                    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
