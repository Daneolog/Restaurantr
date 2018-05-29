import * as restaurantsActions from "../actions/restaurants.action";
import { Restaurant } from "../../models/restaurant.interface";

export interface RestaurantState {
  entities: { [id: number]: Restaurant };
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: restaurantsActions.RestaurantsAction
): RestaurantState {
  switch (action.type) {
    case restaurantsActions.LOAD_RESTAURANTS: {
      return {
        ...state,
        loading: true
      };
    }
    case restaurantsActions.LOAD_RESTAURANTS_SUCCESS: {
      const restaurants = action.payload;
      const entities = restaurants.reduce(
        (entities: { [id: number]: Restaurant }, restaurant) => {
          return {
            ...entities,
            [restaurant.id]: restaurant
          };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case restaurantsActions.LOAD_RESTAURANTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getRestaurantsLoading = (state: RestaurantState) => state.loading;
export const getRestaurantsLoaded = (state: RestaurantState) => state.loaded;
export const getRestaurantEntities = (state: RestaurantState) => state.entities;
