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
    private types: TypesService,
    private sService: SettingsService
  ) {}

  restaurants: Restaurant[];
  settings: any[];
  rLoaded: boolean = false;
  sLoaded: boolean = false;

  ngOnInit() {
    this.rService.getRestaurants().subscribe((data: Restaurant[]) => {
      this.rLoaded = true;
      this.restaurants = data;
    });
    this.sService.getSettings().subscribe((data: any[]) => {
      this.sLoaded = true;
      this.settings = data;
    });
  }

  computeRestaurant(typeId: number): Restaurant {
    return this.restaurants
      .filter((restaurant: Restaurant) => {
        return (
          restaurant.typeId === typeId &&
          new Date().getTime() - Date.parse(String(restaurant.lastVisited)) >
            this.settings["minTime"] * 86400000
        );
      })
      .sort(
        (a: Restaurant, b: Restaurant) =>
          Date.parse(String(a.lastVisited)) - Date.parse(String(b.lastVisited))
      )[0];
  }

  log() {
    console.log(this.restaurants);
    console.log(this.settings);
    console.log(this.computeRestaurant(1));
  }
}
