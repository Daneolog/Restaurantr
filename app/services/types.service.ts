import { Injectable } from "@angular/core";
import { IdsService } from "./ids.service";
import { RestaurantType } from "../models/restaurant-type.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, switchMap } from "rxjs/operators";

const TYPES_API: string = "/api/types";

@Injectable()
export class TypesService {
  constructor(private http: HttpClient, private ids: IdsService) {}

  getType(id: number): Observable<RestaurantType> {
    return this.http
      .get<RestaurantType>(`${TYPES_API}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getTypes(): Observable<RestaurantType[]> {
    return this.http
      .get<RestaurantType[]>(`${TYPES_API}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addType(type: RestaurantType): Observable<RestaurantType> {
    return this.ids.incrementTypeId().pipe(
      switchMap(data => {
        let newType = { ...type, id: data["types"] };
        return this.http
          .post<RestaurantType>(`${TYPES_API}`, newType)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  updateRestaurant(type: RestaurantType): Observable<RestaurantType> {
    return this.http
      .put<RestaurantType>(`${TYPES_API}/${type.id}`, type)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteRestaurant(type: RestaurantType): Observable<RestaurantType> {
    return this.http
      .delete<any>(`${TYPES_API}/${type.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
