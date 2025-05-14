import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model'; 

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private apiUrl = 'https://restfulapi-1.onrender.com/api/movies';
  constructor(private http: HttpClient) { }

  Read(): Observable<Movie[]> { 
    return this.http.get<Movie[]>(this.apiUrl);
  }
  getOne(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  create(item: Movie): Observable<Movie> {  
    return this.http.post<Movie>(this.apiUrl, item);
  }

  update(id: string, item: Movie): Observable<Movie> { 
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
