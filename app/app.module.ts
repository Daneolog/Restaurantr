import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { ConfigModule } from "./config/config.module";
import { DisplayModule } from "./display/display.module";
import { DisplayComponent } from "./display/components/display.component";
import { ConfigComponent } from "./config/components/config.component";
import { StoreModule, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "", redirectTo: "display", pathMatch: "full" },
  { path: "display", component: DisplayComponent },
  { path: "config", component: ConfigComponent }
];

const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  imports: [
    BrowserModule,
    ConfigModule,
    DisplayModule,
    RouterModule.forRoot(routes),
    CommonModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    HttpModule,
    HttpClientModule,
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
