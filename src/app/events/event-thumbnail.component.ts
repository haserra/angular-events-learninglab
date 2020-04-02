import { Component, Input, Output, EventEmitter } from "@angular/core";
import { template } from "@angular/core/src/render3";

@Component({
  selector: "event-thumbnail",
  //templateUrl: "./event-thumbnail.component.html",
  /* template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <!--
      <button class="btn btn-primary" (click)="handleClickMe()">
        Click Me!
      </button>
      -->
    </div>`, */
  templateUrl: "./event-thumbnail.component.html",
  // need to improve CSS Specifity down here, for now am using !important
  styles: [
    `
    .crimson {
      color: #DC143C !important;
    }
    .green { 
      color: #003300 !important;
    }
    .bold {
      font-weight: bold;
    }
    .thumbnail {
      min-height: 210 px;
    }  
    .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  // this is an Input parameter or property
  // this event parameter, will be passed in from another component
  @Input()
  event: any; // we dont care what data type it is ... 

  public someProperty: any = "just testing template variables";
  // to communicate back to the parent component we need to add an Output property

  @Output()
  eventClick = new EventEmitter();

  /* public event = {
    id: 1,
    name: "Angular Connect",
    date: "9/6/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "",
      city: "London",
      country: "England"
    }
  }; */

  handleClickMe() {
    console.log("Just have been clicked!");
    this.eventClick.emit(`the name of the event is ${this.event.name}`);
  }

  logFoo() {
    console.log("just logging foo");
  }

  getStartTimeClass() {
    // needs to evaluate a boolean expression
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {
      crimson: isEarlyStart,
      bold: isEarlyStart
    }


  }

  // ngClass expects an object, but if we provide it with a string or an array of strings 
  // representing the classes we want to apply it works as well, like this

  _getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      //return 'crimson bold'
      return ['green', 'bold']

    } else {
      //return ''
      return []

    }
  }

  // need to explicitly specify the return type because this method returns objects with different shapes
  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: 'yellow', 'font-weight': 'bold' }
    } else {
      return {

      }
    }
  }
}
