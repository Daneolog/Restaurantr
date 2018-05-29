import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  Params,
  convertToParamMap
} from "@angular/router";
import { Location } from "@angular/common";

import { Restaurant } from "../../../../models/restaurant.interface";
import { RestaurantType } from "../../../../models/restaurant-type.interface";

import { switchMap } from "rxjs/operators";
import { RestaurantService } from "../../../../services/restaurant.service";
import { TypesService } from "../../../../services/types.service";

@Component({
  selector: "restaurant-form",
  styleUrls: ["restaurant-form.component.scss"],
  templateUrl: "restaurant-form.component.html"
})
export class RestaurantFormComponent implements OnInit {
  restaurant: Restaurant;
  editing: boolean;

  options = [
    { id: 1, type: "Misc. Food" },
    { id: 2, type: "Italian" },
    { id: 3, type: "Fast Food" },
    { id: 4, type: "Asian" },
    { id: 5, type: "Mexican" },
    { id: 6, type: "Sandwichy" },
    { id: 7, type: "BBQ" },
    { id: 8, type: "Greek" },
    { id: 9, type: "Indian" },
    { id: 10, type: "Pizza" }
  ];

  constructor(
    private rService: RestaurantService,
    private tService: TypesService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    let params = this.route.snapshot.params;

    if (convertToParamMap(params).has("id")) {
      this.editing = true;

      let id = params["id"];
      this.rService
        .getRestaurant(id)
        .subscribe(data => (this.restaurant = data));
    } else if (convertToParamMap(params).has("name")) {
      this.editing = false;

      this.restaurant = {
        id: -1,
        name: params["name"],
        typeId: 1,
        minutesWalking: 0,
        lastVisited: new Date()
      };
    }
  }

  submit(value: Restaurant) {
    if (this.editing) {
      console.log("editing");
      value = { ...value, id: this.restaurant.id };
      this.rService
        .updateRestaurant(value)
        .subscribe(data => console.log(data));
    } else {
      console.log("adding");
      this.rService.addRestaurant(value).subscribe(data => console.log(data));
    }
  }

  back() {
    this.location.back();
  }
}
