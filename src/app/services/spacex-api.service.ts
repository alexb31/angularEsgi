import { Injectable } from '@angular/core';
import { Launch } from './../models/launch';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpacexApiService {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {

  }

  getLaunches(): Observable<Launch[]> {
    const url =  `${this.baseUrl}/launches/upcoming`;
    return this.http.get<Launch[]>(url);
  }

  // fetchAll = () => this.http.get(this.baseUrl + '/launches')

}
