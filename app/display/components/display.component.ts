import { Component, OnInit } from "@angular/core";
import { RestaurantType } from "../../models/restaurant-type.interface";
import { RestaurantService } from "../../services/restaurant.service";
import { TypesService } from "../../services/types.service";
import { Restaurant } from "../../models/restaurant.interface";
import { SettingsService } from "../../services/settings.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-display",
  templateUrl: "display.component.html"
})
export class DisplayComponent implements OnInit {
  constructor(
    private rService: RestaurantService,
    private tService: TypesService,
    private sService: SettingsService
  ) {}

  restaurants: Restaurant[];
  restaurant: Restaurant;
  settings: any[];
  types: RestaurantType[] = [{ id: 0, type: "Any" }];
  rLoaded: boolean = false;
  sLoaded: boolean = false;
  tLoaded: boolean = false;

  ngOnInit() {
    this.rService.getRestaurants().subscribe((data: Restaurant[]) => {
      this.rLoaded = true;
      this.restaurants = data;
    });
    this.sService.getSettings().subscribe((data: any[]) => {
      this.sLoaded = true;
      this.settings = data;
    });
    this.tService.getTypes().subscribe((data: RestaurantType[]) => {
      this.tLoaded = true;
      this.types = [...this.types, ...data];
    });
  }

  submit(formValue) {
    this.restaurant = this.computeRestaurant(formValue.typeId);
  }

  computeRestaurant(typeId: number): Restaurant {
    return this.restaurants
      .filter((restaurant: Restaurant) => {
        return (
          (restaurant.typeId == typeId || typeId == null || typeId == 0) &&
          new Date().getTime() - Date.parse(String(restaurant.lastVisited)) >
            this.settings["minTime"] * 86400000
        );
      })
      .sort(
        (a: Restaurant, b: Restaurant) =>
          Date.parse(String(a.lastVisited)) - Date.parse(String(b.lastVisited))
      )[0];
  }

  handleUpdate(event: Restaurant) {
    this.rService.updateRestaurant(event).subscribe((data: Restaurant) => {
      this.restaurants.map((restaurant: Restaurant) => {
        if (restaurant.id === event.id) {
          restaurant = Object.assign({}, restaurant, event);
        }
        return restaurant;
      });
    });
  }
}
