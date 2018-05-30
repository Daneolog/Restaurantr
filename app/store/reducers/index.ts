import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as restaurants from "./restaurants.reducer";
import * as fromRouter from "@ngrx/router-store";
import {
  Params,
  RouterState,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

export interface MainState {
  restaurants: restaurants.RestaurantState;
}

export const reducers: ActionReducerMap<MainState> = {
  restaurants: restaurants.reducer
};

export const getMainState = createFeatureSelector<MainState>("main");

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const rootReducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
