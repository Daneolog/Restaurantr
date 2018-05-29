import { Action } from "@ngrx/store";
import { Restaurant } from "../../models/restaurant.interface";

export const LOAD_RESTAURANTS = "[Main] Load Restaurants";
export const LOAD_RESTAURANTS_FAIL = "[Main] Load Restaurants Fail";
export const LOAD_RESTAURANTS_SUCCESS = "[Main] Load Restaurants Success";

export class LoadRestaurants implements Action {
  readonly type = LOAD_RESTAURANTS;
}

export class LoadRestaurantsFail implements Action {
  readonly type = LOAD_RESTAURANTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadRestaurantsSuccess implements Action {
  readonly type = LOAD_RESTAURANTS_SUCCESS;
  constructor(public payload: Restaurant[]) {}
}

export type RestaurantsAction =
  | LoadRestaurants
  | LoadRestaurantsFail
  | LoadRestaurantsSuccess;
