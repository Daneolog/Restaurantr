import { Component, OnInit } from "@angular/core";
import { RestaurantType } from "../../models/restaurant-type.interface";
import { RestaurantService } from "../../services/restaurant.service";
import { TypesService } from "../../services/types.service";
import { Restaurant } from "../../models/restaurant.interface";
import { SettingsService } from "../../services/settings.service";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Settings } from "../../models/settings.interface";

@Component({
  selector: "app-display",
  templateUrl: "display.component.html"
})
export class DisplayComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;

  constructor(
    private store: Store<fromStore.MainState>,
    private rService: RestaurantService,
    private tService: TypesService,
    private sService: SettingsService
  ) {}

  restaurant: Restaurant;
  settings: Settings;
  types: RestaurantType[] = [{ id: 0, type: "Any" }];
  sLoaded: boolean = false;
  tLoaded: boolean = false;

  ngOnInit() {
    this.restaurants$ = this.store.select(fromStore.getAllRestaurants);
    this.store.dispatch(new fromStore.LoadRestaurants());

    this.sService.getSettings().subscribe((data: Settings) => {
      this.sLoaded = true;
      this.settings = data;
    });
    this.tService.getTypes().subscribe((data: RestaurantType[]) => {
      this.tLoaded = true;
      this.types = [...this.types, ...data];
    });
  }

  submit(formValue) {
    this.restaurants$.subscribe((restaurants: Restaurant[]) => {
      let newRest: Restaurant = restaurants
        .filter((restaurant: Restaurant) => {
          return (
            (restaurant.typeId == formValue.typeId ||
              formValue.typeId == null ||
              formValue.typeId == 0) &&
            new Date().getTime() - Date.parse(String(restaurant.lastVisited)) >
              this.settings["minTime"] * 86400000
          );
        })
        .sort(
          (a: Restaurant, b: Restaurant) =>
            Date.parse(String(a.lastVisited)) -
            Date.parse(String(b.lastVisited))
        )[0];
      this.restaurant = Object.assign({}, newRest);
    });
  }

  handleUpdate(event: Restaurant) {
    console.log("Event: ", event);
    this.restaurants$
      .pipe(switchMap(() => this.rService.updateRestaurant(event)))
      .subscribe();
  }
}
