import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ConnectService } from '../../services/connect.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ActivatedRoute } from '@angular/router'; 


class ActivatedRouteStub {
  snapshot = { paramMap: { get: () => '1' } }; 
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockService: jasmine.SpyObj<ConnectService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockMovies: Movie[] = [
    { title: 'Movie 1', created: new Date(), genre: 'Action', director: 'Director 1' },
    { title: 'Movie 2', created: new Date(), genre: 'Drama', director: 'Director 2' }
  ];

  beforeEach(async () => {

    mockService = jasmine.createSpyObj('ConnectService', ['Read', 'delete', 'create']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ConnectService, useValue: mockService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;


    mockService.Read.and.returnValue(of(mockMovies));
    mockService.create.and.returnValue(of({
      title: 'New Movie',
      created: new Date(),
      genre: 'Thriller',
      director: 'New Director'
    }));
    mockService.delete.and.returnValue(of(void 0));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies on init', () => {
    expect(mockService.Read).toHaveBeenCalled();
    expect(component.movies.length).toBe(2);
    expect(component.movies[0].title).toBe('Movie 1');
  });

  it('should add a new movie and reload the list', () => {
    const newMovie: Movie = {
      title: 'New Movie',
      created: new Date(),
      genre: 'Thriller',
      director: 'New Director'
    };

    component.newMovie = newMovie;
    component.addMovie();

    expect(mockService.create).toHaveBeenCalledWith(newMovie);
    expect(mockService.Read).toHaveBeenCalledTimes(2);  
  });
});
