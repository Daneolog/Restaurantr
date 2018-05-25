import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Restaurant } from "../models/restaurant.interface";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const RESTAURANT_API: string = "/api/restaurants";

@Injectable()
export class RestaurantService {
  constructor(private http: Http) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(RESTAURANT_API)
      .pipe(map((response: Response) => response.json()));
  }
}
