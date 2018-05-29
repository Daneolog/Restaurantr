import { NgModule } from "@angular/core";
import { DisplayComponent } from "./components/display.component";
import { TypesService } from "../services/types.service";
import { RestaurantService } from "../services/restaurant.service";
import { SettingsService } from "../services/settings.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DisplayComponent],
  imports: [CommonModule],
  exports: [],
  providers: [RestaurantService, TypesService, SettingsService]
})
export class DisplayModule {}
