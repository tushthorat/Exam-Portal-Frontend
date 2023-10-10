// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import baseUrl  from './helper';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {

//   constructor(private http:HttpClient) { }

  

//   //add user
//   public addUser(user:any){
//     return this.http.post(`${baseUrl}/user`,user)
//   }
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Add user with custom headers
  public addUser(user: any) {
    // Define your custom headers
    const headers = new HttpHeaders({
      'Custom-Header-Name': 'Custom-Header-Value',
      // Add more custom headers as needed
    });

    // Use the headers in your HTTP request
    return this.http.post(`${baseUrl}/user`, user, { headers });
  }
}
