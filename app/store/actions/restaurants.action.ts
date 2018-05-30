import { Action } from "@ngrx/store";
import { Restaurant } from "../../models/restaurant.interface";

export const LOAD_RESTAURANTS = "[Main] Load Restaurants";
export const LOAD_RESTAURANTS_FAIL = "[Main] Load Restaurants Fail";
export const LOAD_RESTAURANTS_SUCCESS = "[Main] Load Restaurants Success";
export const UPDATE_RESTAURANT = "[Main] Update Restaurant";
export const UPDATE_RESTAURANT_FAIL = "[Main] Update Restaurant Fail";
export const UPDATE_RESTAURANT_SUCCESS = "[Main] Update Restaurant Success";

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

export class UpdateRestaurant implements Action {
  readonly type = UPDATE_RESTAURANT;
  constructor(public payload: Restaurant) {}
}

export class UpdateRestaurantSuccess implements Action {
  readonly type = UPDATE_RESTAURANT_SUCCESS;
  constructor(public payload: Restaurant) {}
}

export class UpdateRestaurantFail implements Action {
  readonly type = UPDATE_RESTAURANT_FAIL;
  constructor(public payload: any) {}
}

export type RestaurantsAction =
  | LoadRestaurants
  | LoadRestaurantsFail
  | LoadRestaurantsSuccess
  | UpdateRestaurant
  | UpdateRestaurantFail
  | UpdateRestaurantSuccess;
