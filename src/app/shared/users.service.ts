import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:3000/usuarios"

  constructor(private http: HttpClient) { }

  getUser(id:number)
  {
    return this.http.get(this.url + "/" + id)
  }
  postUser(user:User)
  {
    return this.http.post(this.url, user)
  }
  putUser(user:User)
  {
    return this.http.put(this.url, user)
  }
  deleteUser(id:any)
  {
    const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }
}
