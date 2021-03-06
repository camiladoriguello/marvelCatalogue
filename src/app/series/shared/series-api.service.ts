import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {

  PUBLIC_KEY = 'deadb53ba13b2280d325ce2e9f63fe4f'
  HASH = '20ed66fa8959b6bab426014023f20cd8'
  URL_API = `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  constructor(private http: HttpClient) { }

  getAllSeries(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
