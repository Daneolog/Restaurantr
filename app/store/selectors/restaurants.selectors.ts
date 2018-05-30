import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromRestaurants from "../reducers/restaurants.reducer";

export const getRestaurantState = createSelector(
  fromFeature.getMainState,
  (state: fromFeature.MainState) => state.restaurants
);

export const getRestaurantEntities = createSelector(
  getRestaurantState,
  fromRestaurants.getRestaurantEntities
);

export const getAllRestaurants = createSelector(
  getRestaurantEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getRestaurantsLoaded = createSelector(
  getRestaurantState,
  fromRestaurants.getRestaurantsLoaded
);

export const getRestaurantsLoading = createSelector(
  getRestaurantState,
  fromRestaurants.getRestaurantsLoading
);
