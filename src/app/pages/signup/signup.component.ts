import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  //standalone: true,
  //imports: [MatFormFieldModule, MatInputModule]
})
export class SignupComponent implements OnInit{
 
  
  constructor(private userService:UserService,private snack:MatSnackBar){}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phonenumber:''
  }

  ngOnInit(): void {
      
  }

  formSubmit(addForm:NgForm):void{
    console.log(this.user);
    
    if(this.user.username=='' || this.user.username==null){
      //using snackbar
      // this.snack.open('usename is required','',{
      //   duration:3000,
      // });

     alert("user is required");
      return;
    }

    //addUser:userservice
     this.userService.addUser(this.user).subscribe({
      next(data) {
        console.log(data);
        alert('success');
        // Swal.fire('successfully done!!','user','success');
      },
      error(error) {
        console.log(error); 
        alert('someting went wrong');
        // this.snack.open('something wet wrong','',{
        //        duration:3000,
        //     })
      }
      // (data:any)=>{
      //   console.log(data);
      //   Swal.fire('successfully done!!','user is is'+data.id,'success');
      //   //alert('success');
      // },
      // (error)=>{
      //   //error
      //   console.log(error);
      //   this.snack.open('something wet wrong','',{
      //     duration:3000,
      //   })
      //   //alert('someting went wrong');
      // }

    })

    alert('submit');
  }
}
