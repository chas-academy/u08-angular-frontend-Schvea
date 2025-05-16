import { TestBed } from '@angular/core/testing';
import { ConnectService } from './connect.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Movie } from '../models/movie.model';

describe('ConnectService', () => {
  let service: ConnectService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConnectService]
    });

    service = TestBed.inject(ConnectService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch movies using Read()', () => {
    const mockMovies: Movie[] = [
      { title: 'Movie 1', created: new Date(), genre: 'Action', director: 'Director 1' },
      { title: 'Movie 2', created: new Date(), genre: 'Drama', director: 'Director 2' }
    ];

    service.Read().subscribe((data: Movie[]) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockMovies);
    });

    const req = httpMock.expectOne('https://restfulapi-1.onrender.com/api/movies');
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
