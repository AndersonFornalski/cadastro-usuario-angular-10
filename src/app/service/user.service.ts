import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }
  
  private baseUrl = "http://localhost:8095";

  getAllUsers(){
    return this.http.get<User[]>(`${this.baseUrl}/user`);
  }
  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/user`, user)
  }
}
