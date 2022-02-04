import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  makeAHttpReq():Observable<any[]>
  {
    return this.hc.get<any[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
