import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   public loginData={
       username:'',
       password:'',
   };

   constructor(private snack:MatSnackBar,private login:LoginService){};
   ngOnInit(): void {
      
   }
   formSubmit(){
    console.log("btn is clicked!!!");
    if(this.loginData.username.trim()=='' ||
    this.loginData.username==null){
        this.snack.open('username is required!!!','',{
          duration:3000,
        });
        return;
    }

    this.login.generateToken(this.loginData)
    .pipe(
      catchError((error) => {
        console.error(error);
        this.snack.open('Something went wrong', '', {
          duration: 3000,
        });
        throw error; // Re-throw the error to propagate it further if needed
      })
    )
    .subscribe((data: any) => {
      console.log(data);
      this.snack.open('Login successful', '', {
        duration: 3000,
      });
      // You can navigate to a different page or perform other actions here.
    });
   }
  
}
