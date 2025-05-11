import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private apiUrl = 'https://restfulapi-1.onrender.com/api/movies';
  constructor(private http: HttpClient) { }

  Read(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
