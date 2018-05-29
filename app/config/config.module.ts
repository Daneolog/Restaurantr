import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { RestaurantService } from "../services/restaurant.service";
import { IdsService } from "../services/ids.service";

import { ConfigComponent } from "./components/config.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { RestaurantFormComponent } from "./components/restaurant/restaurant-form/restaurant-form.component";
import { TypeConfigComponent } from "./components/type-config/type-config.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { SettingsService } from "../services/settings.service";
import { TypesService } from "../services/types.service";

const routes: Routes = [
  {
    path: "config",
    children: [
      { path: "", component: ConfigComponent },
      { path: "add/:name", component: RestaurantFormComponent },
      { path: "edit/:id", component: RestaurantFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ConfigComponent,
    RestaurantComponent,
    RestaurantFormComponent,
    TypeConfigComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule
  ],
  exports: [],
  providers: [RestaurantService, TypesService, IdsService, SettingsService]
})
export class ConfigModule {}
