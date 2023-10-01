import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  //standalone: true,
  //imports: [MatFormFieldModule, MatInputModule]
})
export class SignupComponent {
   
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phonenumber:''
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      alert("user is required");
      return;
    }
    alert('submit');
  }
}
