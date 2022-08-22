import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursed } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursedServiceService {

  SERVER_URL = 'http://localhost:15151';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cursed[]>{
    console.log("getall service");
    return this.http.get<Cursed[]>(`${this.SERVER_URL}/cursedPerson`);
  }

  getOne(id: String){
    console.log("getOne service");
    console.log(id);
    return this.http.get(`${this.SERVER_URL}/cursedPerson/${id}`);
  }

  add(cursed: Cursed){
    console.log("add service");
    console.log(cursed);
    let json = JSON.parse(JSON.stringify(cursed));
    console.log(json);
    return this.http.post(`${this.SERVER_URL}/cursedPerson`,json);
  }

  remove(cursed: Cursed){
    console.log("remove service");
    console.log(cursed);
    return this.http.delete<Cursed>(`${this.SERVER_URL}/cursedPerson/${cursed._id}`);
  }

  update(cursed: Cursed){
    console.log("update service");
    console.log(cursed);
    return this.http.patch<Cursed>(`${this.SERVER_URL}/cursedPerson/${cursed._id}`,cursed);
  }
}
