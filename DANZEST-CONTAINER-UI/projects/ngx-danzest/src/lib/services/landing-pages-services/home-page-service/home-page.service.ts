import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ihomepage } from '../../../models/landing-page-models/home-page.model';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  public apiUrl = 'http://localhost:8000/landing-page/home-page';

  constructor(private http: HttpClient) {}

  createHomePage(body: Ihomepage[]): Observable<any> {
    return this.http.post(this.apiUrl, body)
    .pipe(
      tap((data: any) => console.log('Data... ', data))
    )
  }

  //TODO
  getHomePage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}


