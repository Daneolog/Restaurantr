import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { ConfigModule } from "./config/config.module";
import { DisplayModule } from "./display/display.module";
import { DisplayComponent } from "./display/components/display.component";
import { ConfigComponent } from "./config/components/config.component";

const routes: Routes = [
  { path: "", component: DisplayComponent, pathMatch: "full" },
  { path: "config", component: ConfigComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    BrowserModule,
    ConfigModule,
    DisplayModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
