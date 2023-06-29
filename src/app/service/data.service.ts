import { Injectable } from '@angular/core';
import { Login, Registration } from '../class/registration';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  api_url = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup';
  api_urlSign = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin';
  profile_api = 'https://wtsacademy.dedicateddevelopers.us/api/user/profile-details';

  constructor(private http: HttpClient, private auth: StoreService) {}

  rgdata(data: any): Observable<Registration[]> {
    return this.http.post<Registration[]>(this.api_url, data);
  }
  logindata(data: any): Observable<Login[]> {
    return this.http.post<Login[]>(this.api_urlSign, data);
  }

  //profile of user
  user_profile():Observable<Registration[]>{
    return this.http.get<Registration[]>(this.profile_api, {
      headers: new HttpHeaders({
        'x-access-token': `${this.auth.getToken()}`,
      }),
    });
  }
}
