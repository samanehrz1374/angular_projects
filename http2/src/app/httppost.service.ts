import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttppostService {
  configUrl='http://localhost:3000/users'
  params = new HttpParams({
    fromObject: { Name : 'name',
    Email : 'email',
    Role : 'role',
    Status : 'Inactive',
    MobileNumber : 1234567890
    }
    });

  headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) { }


  posturl(){
    return  this.http.post(this.configUrl, this.params);
  }
}
