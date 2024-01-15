import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BooksDTO } from './api.service.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private baseURL: string = 'https://wolnelektury.pl/api'

  getBooks(): Observable<BooksDTO> {
    return this.http.get<BooksDTO>(`${this.baseURL}/books`)
  }
}
