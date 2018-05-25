import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Restaurant } from "../models/restaurant.interface";

import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IdsService } from "./ids.service";

const RESTAURANT_API: string = "/api/restaurants";

@Injectable()
export class RestaurantService {
  constructor(private http: Http, private ids: IdsService) {}

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http
      .get(`${RESTAURANT_API}/${id}`)
      .pipe(map((response: Response) => response.json()));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(RESTAURANT_API)
      .pipe(map((response: Response) => response.json()));
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.ids
      .getLatestRestaurantId()
      .pipe(
        switchMap(data => {
          restaurant = { ...restaurant, id: data["restaurants"] + 1 };
          this.ids.incrementRestaurantId(data).subscribe();
          return this.http.post(`${RESTAURANT_API}`, restaurant);
        })
      )
      .pipe(map((response: Response) => response.json()));
  }

  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http
      .put(`${RESTAURANT_API}/${restaurant.id}`, restaurant)
      .pipe(map((response: Response) => response.json()));
  }

  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http
      .delete(`${RESTAURANT_API}/${restaurant.id}`)
      .pipe(map((response: Response) => response.json()));
  }
}
