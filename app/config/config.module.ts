import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { RestaurantService } from "../services/restaurant.service";

import { ConfigComponent } from "./components/config.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { RestaurantFormComponent } from "./components/restaurant-form/restaurant-form.component";

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
  declarations: [ConfigComponent, RestaurantComponent, RestaurantFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule
  ],
  exports: [],
  providers: [RestaurantService]
})
export class ConfigModule {}
