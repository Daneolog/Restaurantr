import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Restaurant } from "../../../models/restaurant.interface";

@Component({
  selector: "restaurant-information",
  templateUrl: "restaurant-information.component.html"
})
export class RestaurantInformationComponent {
  @Input() restaurant: Restaurant;

  @Output()
  updateEvent: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  visit() {
    this.restaurant = Object.assign(this.restaurant, {
      lastVisited: new Date()
    });
    this.updateEvent.emit(this.restaurant);
  }
}
