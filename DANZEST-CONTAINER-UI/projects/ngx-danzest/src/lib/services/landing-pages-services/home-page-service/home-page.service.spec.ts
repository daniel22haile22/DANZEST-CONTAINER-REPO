
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomePageService } from './home-page.service';
import { Ihomepage } from '../../../models/landing-page-models/home-page.model';

describe('HomePageService', () => {
  let service: HomePageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomePageService],
    });
    service = TestBed.inject(HomePageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request to create home page', () => {
    const mockResponse = { message: 'Home page created successfully' };
    const mockHomePage: Ihomepage[] = [
      {
        title: 'Test Title',
        content: 'Test Content',
        imageUrl: 'test-image.jpg',
      },
    ];

    service.createHomePage(mockHomePage).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(service.apiUrl); //apiUrl - make it public from the service or use the API endpoint
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockHomePage);

    request.flush(mockResponse);
  });
});



