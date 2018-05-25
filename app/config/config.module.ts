import { NgModule } from "@angular/core";
import { ConfigComponent } from "./components/config.component";
import { CommonModule } from "@angular/common";
import { RestaurantService } from "../services/restaurant.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, HttpModule],
  exports: [],
  providers: [RestaurantService]
})
export class ConfigModule {}
