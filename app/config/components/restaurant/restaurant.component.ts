import { Component } from "@angular/core";
import { Restaurant } from "../../../models/restaurant.interface";

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

  constructor() {
    this.data = [
      {
        id: 1,
        name: "Applebees",
        type: { type: "Misc Food" },
        minutesWalking: 5
      }
    ];
  }

  delete(item: Restaurant) {
    console.log("deleted", item);
    this.data = this.data.filter((value, index, array) => value.id != item.id);
  }
}
