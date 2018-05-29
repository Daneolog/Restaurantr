import { Component, Input } from "@angular/core";
import { RestaurantType } from "../../../models/restaurant-type.interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TypesService } from '../../../services/types.service'
import { switchMap } from "rxjs/operators";
import { RestaurantService } from "../../../services/restaurant.service";

@Component({
  selector: "type-config",
  templateUrl: "type-config.component.html",
  styleUrls: ["type-config.component.scss"]
})
export class TypeConfigComponent {
  src_delete = "../../../img/remove.png";

  name: string = '';
  types: string[] = [];
  data:  RestaurantType[];

  constructor(private service: TypesService, private service2: RestaurantService) {
    this.service.getTypes().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  addType(): void {
    //this.data = [...this.data, { id: 1000, type: this.name }];
    this.service.addType({ id: 1000, type: this.name }).pipe(switchMap(data => this.service.getTypes())).subscribe(data => this.data = data);
    this.service.getTypes().subscribe(data => this.data = data);
  }

  delete(item: RestaurantType) {
    this.service
      .deleteRestaurant(item)
      .pipe(switchMap(data => this.service.getTypes()))
      .subscribe(data => (this.data = data));
  }
}
