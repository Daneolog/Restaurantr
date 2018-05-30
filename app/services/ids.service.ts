import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { catchError, map, switchMap } from "rxjs/operators";

const ID_API = "/api/ids";

@Injectable()
export class IdsService {
  constructor(private http: HttpClient) {}

  getLatestIds(): Observable<Object> {
    return this.http
      .get<Object>(`${ID_API}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  incrementRestaurantId(): Observable<Object> {
    return this.getLatestIds().pipe(
      switchMap(data => {
        let counter = data["restaurants"] + 1;
        return this.http.put(`${ID_API}`, { ...data, restaurants: counter });
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  incrementTypeId(): Observable<Object> {
    return this.getLatestIds().pipe(
      switchMap(data => {
        let counter = data["types"] + 1;
        return this.http.put(`${ID_API}`, { ...data, types: counter });
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }
}
