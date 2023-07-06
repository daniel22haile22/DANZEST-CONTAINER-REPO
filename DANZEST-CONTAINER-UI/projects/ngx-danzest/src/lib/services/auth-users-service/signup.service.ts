import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignup } from '../../models/auth-models/signup.model';
import { authURLS } from '../../constants/api.constant';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  registerUser(userData: ISignup): Observable<ISignup> {
    return this.http.post<ISignup>(authURLS.apiUrl_Signup, userData);
  }
}
