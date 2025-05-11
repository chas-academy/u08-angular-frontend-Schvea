import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConnectService } from '../../services/connect.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  standalone: true,
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
