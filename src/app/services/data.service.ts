import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = 'http://localhost/Proyectos/parisAPI/public/';
  }

  getData(endpoint: string): Observable<any> {
    return this.httpClient.get(this.apiURL + endpoint);
  }
  postData(endpoint: string, data): Observable<any> {
    return this.httpClient.post(this.apiURL + endpoint, data);
  }

}
