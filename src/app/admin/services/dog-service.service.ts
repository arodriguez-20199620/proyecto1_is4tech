import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private apiUrl = environment.URL_DOGS;

  constructor(private http: HttpClient) { }

  getRandomDogImage(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
