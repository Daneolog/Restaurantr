import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact?: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <nav class="nav">
        <a *ngFor="let btn of nav"
          [routerLink]="btn.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: btn.exact}">
          {{ btn.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: "/display",
      name: "Home"
    },
    {
      link: "/config",
      name: "Config"
    }
  ];
}
