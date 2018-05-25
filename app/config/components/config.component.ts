import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/restaurant.service";
import { Restaurant } from "../../models/restaurant.interface";

import { map } from "rxjs/operators";

@Component({
  selector: "app-config",
  templateUrl: "config.component.html"
})
export class ConfigComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .getRestaurants()
      .subscribe((data: Restaurant[]) => (this.restaurants = data));
    this.restaurantService
      .getRestaurant(1)
      .subscribe((data: Restaurant) => (this.restaurant = data));
    this.restaurantService
      .addRestaurant({
        id: -1,
        name: "Boi",
        typeId: 1,
        minutesWalking: 5,
        lastVisited: new Date()
      })
      .subscribe((restaurant: Restaurant) => console.log(restaurant));
  }
}
