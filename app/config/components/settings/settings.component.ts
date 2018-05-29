import { Component, OnInit } from "@angular/core";
import { Settings } from "../../../models/settings.interface";
import { SettingsService } from "../../../services/settings.service";

@Component({
  selector: "settings",
  styleUrls: ["settings.component.scss"],
  templateUrl: "settings.component.html"
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private service: SettingsService) {}

  ngOnInit() {
    this.service.getSettings().subscribe(data => (this.settings = data));
  }

  submit(data) {
    this.service.setSettings(data).subscribe(data => console.log(data));
  }

  reset(minTime) {
    this.service.getSettings().subscribe(data => (this.settings = data));
  }
}
