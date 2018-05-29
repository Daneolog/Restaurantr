import { NgModule } from "@angular/core";
import { DisplayComponent } from "./components/display.component";
import { TypesService } from "../services/types.service";
import { RestaurantService } from "../services/restaurant.service";

@NgModule({
  declarations: [DisplayComponent],
  imports: [],
  exports: [],
  providers: [RestaurantService, TypesService]
})
export class DisplayModule {}
