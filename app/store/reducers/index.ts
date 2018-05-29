import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as restaurants from "./restaurants.reducer";

export interface MainState {
  restaurants: restaurants.RestaurantState;
}

export const reducers: ActionReducerMap<MainState> = {
  restaurants: restaurants.reducer
};

export const getMainState = createFeatureSelector<MainState>("main");

export const getRestaurantState = createSelector(
  getMainState,
  (state: MainState) => state.restaurants
);

export const getRestaurantEntities = createSelector(
  getRestaurantState,
  restaurants.getRestaurantEntities
);

export const getAllRestaurants = createSelector(
  getRestaurantEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getRestaurantsLoaded = createSelector(
  getRestaurantState,
  restaurants.getRestaurantsLoaded
);

export const getRestaurantsLoading = createSelector(
  getRestaurantState,
  restaurants.getRestaurantsLoading
);
