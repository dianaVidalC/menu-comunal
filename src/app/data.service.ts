import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = '../data/menu.json';
  constructor(private http: HttpClient) {}

  public getItems(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
