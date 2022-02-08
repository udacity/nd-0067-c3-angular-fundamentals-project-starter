// TODO: This sevice is to be removed from the application as it is not needed for the app.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/users')
  }
}