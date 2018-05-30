import { NgModule } from "@angular/core";
import { DisplayComponent } from "./components/display.component";
import { TypesService } from "../services/types.service";
import { RestaurantService } from "../services/restaurant.service";
import { SettingsService } from "../services/settings.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RestaurantInformationComponent } from "./components/restaurant-information/restaurant-information.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "../store";
import { IdsService } from "../services";

@NgModule({
  declarations: [DisplayComponent, RestaurantInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("main", reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  providers: [RestaurantService, TypesService, SettingsService, IdsService]
})
export class DisplayModule {}
