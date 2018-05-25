import { NgModule } from "@angular/core";
import { ConfigComponent } from "./components/config.component";
import { CommonModule } from "@angular/common";
import { RestaurantService } from "../services/restaurant.service";
import { HttpModule } from "@angular/http";
import { IdsService } from "../services/ids.service";

@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, HttpModule],
  exports: [],
  providers: [RestaurantService, IdsService]
})
export class ConfigModule {}
