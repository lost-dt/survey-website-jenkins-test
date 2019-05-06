import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatData } from '../shared/stat-data.model';
import * as Highcharts from "highcharts";

@Injectable({ providedIn: 'root' })
export class StatisticsService {

  public statData = new BehaviorSubject<StatData[]>([]);

  constructor(private http: HttpClient) {}

  getStats(): void {
    this.http.get<StatData[]>(`api/vote/stats_all`).pipe(catchError(this.handleError)).subscribe(data => {
      this.statData.next(data);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
