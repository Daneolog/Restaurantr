import { Component } from "@angular/core";

import { switchMap } from "rxjs/operators";

import { Restaurant } from "../../../models/restaurant.interface";
import { RestaurantService } from "../../../services/restaurant.service";

@Component({
  selector: "restaurant",
  styleUrls: ["restaurant.component.scss"],
  templateUrl: "restaurant.component.html"
})
export class RestaurantComponent {
  src_add = "../../../img/add.png";
  src_edit = "../../../img/edit.png";
  src_delete = "../../../img/remove.png";

  data: Restaurant[];
  name;

  constructor(private service: RestaurantService) {
    this.service.getRestaurants().subscribe(data => (this.data = data));
  }

  delete(item: Restaurant) {
    this.service
      .deleteRestaurant(item)
      .pipe(switchMap(data => this.service.getRestaurants()))
      .subscribe(data => (this.data = data));
  }
}
