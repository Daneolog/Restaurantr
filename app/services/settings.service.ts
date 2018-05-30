import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Settings } from "../models/settings.interface";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";

const SETTINGS_API: string = "/api/settings";

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings(): Observable<Settings> {
    return this.http
      .get<Settings>(SETTINGS_API)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  setSettings(data) {
    return this.http
      .put<Settings>(SETTINGS_API, data)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
