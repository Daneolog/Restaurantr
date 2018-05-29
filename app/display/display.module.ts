import { NgModule } from "@angular/core";
import { DisplayComponent } from "./components/display.component";
import { TypesService } from "../services/types.service";
import { RestaurantService } from "../services/restaurant.service";
import { SettingsService } from "../services/settings.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RestaurantInformationComponent } from "./components/restaurant-information/restaurant-information.component";

@NgModule({
  declarations: [DisplayComponent, RestaurantInformationComponent],
  imports: [CommonModule, FormsModule],
  exports: [],
  providers: [RestaurantService, TypesService, SettingsService]
})
export class DisplayModule {}
