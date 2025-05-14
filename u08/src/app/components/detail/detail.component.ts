import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectService } from '../../services/connect.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  imports: [CommonModule, FormsModule]
})
export class DetailComponent implements OnInit {
  movie: Movie = {
    title: '',
    created: new Date(),
    genre: '',
    director: ''
  };
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private service: ConnectService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('Retrieved movie id:', this.id); 
    this.service.getOne(this.id).subscribe(data => {
      this.movie = data;
    });
  }
  updateMovie(): void {
    this.service.update(this.id, this.movie).subscribe({
      next: () => {
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Error updating movie:', err);
      }
    });
  }
}