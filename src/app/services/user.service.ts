import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(body: any): Observable<any>{
    return this.http.post<any>(`${environment.apiRest}register`, body);
  }

  login(body: any): Observable<any>{
    return this.http.post<any>(`${environment.apiRest}login`, body);
  }

  logout(body: any = {}): Observable<any>{
    return this.http.post<any>(`${environment.apiRest}logout`, body);
  }


}
