import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

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

  incrementRestaurantId(currentIds): Observable<number> {
    return this.http
      .put(`${ID_API}`, {
        ...currentIds,
        restaurants: currentIds["restaurants"] + 1
      })
      .pipe(map((response: Response) => response.json()));
  }
}
