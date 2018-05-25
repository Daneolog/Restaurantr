import { NgModule } from "@angular/core";
import { ConfigComponent } from "./components/config.component";
import { TypeConfigComponent } from "./components/type-config/type-config.component"
import { CommonModule } from  "@angular/common";

@NgModule({
  declarations: [ConfigComponent, TypeConfigComponent],
  imports: [CommonModule],
  exports: []
})
export class ConfigModule {}
