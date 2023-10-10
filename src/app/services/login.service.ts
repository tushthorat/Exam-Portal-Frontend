import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  //generate token
  public generateToken(loginData:any): Observable<any>{
    return this.http.post('$(baseUrl)/generate-token', loginData);
  }
}
