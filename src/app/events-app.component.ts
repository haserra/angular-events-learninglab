import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `
  /* template: `
    <h2>Hello World</h2>
    <img src="/assets/images/basic-shield.png" />
  ` */
  /**
   * this path, above, is relative to index.html file
   */

  /**
   * alternative using a child component
   */
})
export class EventsAppComponent {
  title = "Events App";
}
