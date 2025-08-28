import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8888';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}
  addUser(userData: any): Observable<any> {
    return this.http.post(BASE_URL + `/addnewuser`, userData);
  }

  fetchUsers():Observable<any>{
    return this.http.get(BASE_URL+`/getAllUsers`);
  }

  getById(id:number):Observable<any>{
    return this.http.get(BASE_URL+`/getUserByID/${id}`);

  }

  deleteById(id:number):Observable<any>{
    return this.http.delete(BASE_URL+`/deleteUserById/${id}`)
  }

  updateById(id:number, userData:any):Observable<any>{
    return this.http.put(BASE_URL+`/updateUserById/${id}`, userData)
  }

  getUserByName(name:any){
    return this.http.get(BASE_URL+`/getUserByName/${name}`)
  }

  pacthUpdate(id:number, userData:any):Observable<any>{
    return this.http.patch(BASE_URL+`/patchUserById/${id}`, userData)
  }
}