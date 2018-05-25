import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

import { map, switchMap } from "rxjs/operators";

const ID_API = "/api/ids";

@Injectable()
export class IdsService {
  constructor(private http: Http) {}

  getLatestRestaurantId(): Observable<any> {
    return this.http.get(`${ID_API}`).pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }

  incrementRestaurantId(): Observable<Response> {
    return this.getLatestRestaurantId().pipe(
      switchMap(data => {
        let counter = data["restaurants"] + 1;
        return this.http.put(`${ID_API}`, { ...data, restaurants: counter });
      })
    );
  }

  decrementRestaurantId(): Observable<Response> {
    return this.getLatestRestaurantId().pipe(
      switchMap(data => {
        let counter = data["restaurants"] - 1;
        return this.http.put(`${ID_API}`, { ...data, restaurants: counter });
      })
    );
  }
}
