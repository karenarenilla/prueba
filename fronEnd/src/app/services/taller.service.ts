import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taller } from '../models/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  selectedTaller: Taller;
  personas: Taller[];
 
   readonly URL_API = 'http://localhost:8080/api/v1/taller/';
 
  constructor( private http: HttpClient) {
    this.selectedTaller = new Taller();
   }
 
   getTalleres() {
     return this.http.get(this.URL_API);
   }
 
   postTaller(taller: Taller) {
     return this.http.post(this.URL_API, taller);
   }
 
   putTaller(taller: Taller) {
     return this.http.put(this.URL_API + `/${taller._id}`, taller)
   }
 
   deleteTaller(id: String) {
     return this.http.delete(this.URL_API + `/${id}`)
   }
}
