import { Component, OnInit } from "@angular/core";
import { RestaurantType } from "../../models/restaurant-type.interface";
import { RestaurantService } from "../../services/restaurant.service";
import { TypesService } from "../../services/types.service";
import { Restaurant } from "../../models/restaurant.interface";

@Component({
  selector: "app-display",
  templateUrl: "display.component.html"
})
export class DisplayComponent implements OnInit {
  constructor(
    private restaurants: RestaurantService,
    private types: TypesService
  ) {}

  ngOnInit() {
    this.computeRestaurant(1);
  }

  computeRestaurant(typeId: number) {
    this.restaurants.getRestaurants().subscribe((data: Restaurant[]) => {
      // TODO: change fixed value to timeout
      console.log(
        data
          .filter((restaurant: Restaurant) => {
            return (
              restaurant.typeId === typeId &&
              new Date().getTime() -
                Date.parse(String(restaurant.lastVisited)) >
                86400000
            );
          })
          .sort(
            (a: Restaurant, b: Restaurant) =>
              Date.parse(String(a.lastVisited)) -
              Date.parse(String(b.lastVisited))
          )
      );
    });
  }
}
