import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/restaurant.service";
import { Restaurant } from "../../models/restaurant.interface";

import { map } from "rxjs/operators";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-config",
  templateUrl: "config.component.html"
})
export class ConfigComponent {
  restaurants: Restaurant[];
  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) {}
}
