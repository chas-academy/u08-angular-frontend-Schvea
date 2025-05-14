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
export class DetailComponent {

}
