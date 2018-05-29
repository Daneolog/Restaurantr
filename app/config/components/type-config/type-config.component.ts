import { Component, Input } from "@angular/core";
import { RestaurantType } from "../../../models/restaurant-type.interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "type-config",
  templateUrl: "type-config.component.html",
  styleUrls: ["type-config.component.scss"]
})
export class TypeConfigComponent {
  @Input() typetoAdd: string;
  name: string = "Alex";
  types: string[] = [];

  typeLists: RestaurantType[] = [
    {
      id: 0,
      type: "Misc."
    },
    {
      id: 1,
      type: "Italian"
    },
    {
      id: 2,
      type: "FastFood"
    }
  ];

  addType(event: any): void {
    this.name = event.target.value;
    this.types = [...this.types, this.name];
  }
}
