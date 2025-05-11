import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private service: ConnectService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadMovies();
  }
  loadMovies(): void {
    this.service.Read().subscribe(data => {
      this.movies = data;
    });
  }
  deleteMovie(id: string): void {
    this.service.delete(id).subscribe(() => this.loadMovies());
  }

  goToEdit(id: string): void {
    this.router.navigate(['/movie', id]);
  }
}
