import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Restaurant } from "../models/restaurant.interface";

import { Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { IdsService } from "./ids.service";

const RESTAURANT_API: string = "/api/restaurants";

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient, private ids: IdsService) {}

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${RESTAURANT_API}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(RESTAURANT_API)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.ids.incrementRestaurantId().pipe(
      switchMap(data => {
        let newRestaurant = { ...restaurant, id: data["restaurants"] };
        console.log("posting new restaurant", newRestaurant);
        return this.http.post<Restaurant>(`${RESTAURANT_API}`, newRestaurant);
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http
      .put<Restaurant>(`${RESTAURANT_API}/${restaurant.id}`, restaurant)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http
      .delete<any>(`${RESTAURANT_API}/${restaurant.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
