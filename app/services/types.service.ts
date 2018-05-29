import { Injectable } from "@angular/core";
import { IdsService } from "./ids.service";
import { RestaurantType } from "../models/restaurant-type.interface";
import { Observable } from "rxjs";
import { Http, Response } from "@angular/http";
import { map, switchMap } from "rxjs/operators";

const TYPES_API: string = "/api/types";

@Injectable()
export class TypesService {
  constructor(private http: Http, private ids: IdsService) {}

  getType(id: number): Observable<RestaurantType> {
    return this.http
      .get(`${TYPES_API}/${id}`)
      .pipe(map((response: Response) => response.json()));
  }

  getTypes(): Observable<RestaurantType[]> {
    return this.http
      .get(`${TYPES_API}`)
      .pipe(map((response: Response) => response.json()));
  }

  addType(type: RestaurantType): Observable<RestaurantType> {
    return this.ids.incrementTypeId().pipe(
      switchMap(data => {
        let newType = { ...type, id: data.json()["types"] };
        return this.http
          .post(`${TYPES_API}`, newType)
          .pipe(map(response => response.json()));
      })
    );
  }

  updateRestaurant(type: RestaurantType): Observable<RestaurantType> {
    return this.http
      .put(`${TYPES_API}/${type.id}`, type)
      .pipe(map((response: Response) => response.json()));
  }

  deleteRestaurant(type: RestaurantType): Observable<RestaurantType> {
    return this.http
      .delete(`${TYPES_API}/${type.id}`)
      .pipe(map(response => response.json()));
  }
}
