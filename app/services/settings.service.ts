import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Settings } from "../models/settings.interface";
import { map } from "rxjs/operators";

const SETTINGS_API: string = "/api/settings";

@Injectable()
export class SettingsService {
  constructor(private http: Http) {}

  getSettings() {
    return this.http.get(SETTINGS_API).pipe(map(data => data.json()));
  }

  setSettings(data) {
    return this.http.put(SETTINGS_API, data);
  }
}
