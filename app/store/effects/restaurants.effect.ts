import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";

import * as restaurantsActions from "../actions/restaurants.action";
import * as services from "../../services";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class RestaurantsEffect {
  constructor(
    private actions$: Actions,
    private rService: services.RestaurantService
  ) {}

  @Effect()
  loadRestaurants$ = this.actions$
    .ofType(restaurantsActions.LOAD_RESTAURANTS)
    .pipe(
      switchMap(() => {
        return this.rService
          .getRestaurants()
          .pipe(
            map(
              restaurants =>
                new restaurantsActions.LoadRestaurantsSuccess(restaurants)
            ),
            catchError(error =>
              of(new restaurantsActions.LoadRestaurantsFail(error))
            )
          );
      })
    );
}
