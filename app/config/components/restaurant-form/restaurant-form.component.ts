import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Restaurant } from "../../../models/restaurant.interface";
import { RestaurantType } from "../../../models/restaurant-type.interface";

@Component({
  selector: "restaurant-form",
  styleUrls: ["restaurant-form.component.scss"],
  templateUrl: "restaurant-form.component.html"
})
export class RestaurantFormComponent implements OnInit {
  data: Restaurant[];
  editing: boolean;

  id: number;
  name: string;
  type: RestaurantType;
  minutesWalking: number;

  constructor(
    private service: RestaurantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // id = service.getRestaurants().length();
      // if (Object.keys(params).indexOf('id') < 0) { // it's an edit, get stuff
      //   id = Object.keys(params).indexOf('id');
      //   let data: Restaurant = service.getRestaurant(id);
      //   this.editing = true;
      //   this.name =
      // }
    });
  }
}
