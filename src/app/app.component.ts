import { Component } from '@angular/core';
// Import angular schedule components
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  // View customization
  template: '<ejs-schedule  height="850" width="1250" [eventSettings]="eventObject" [currentView]="setView"> </ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendarUPC';
  // Show the calendar in month view
  public setView: View = 'Month';
  // Create a Event with defaults options
  public eventObject: EventSettingsModel = {
    dataSource: [{
      EventTitle: "",
      EvenStart: new Date(2021,0,17,4,0),
      EvenEnd: new Date(2021,0,17,6,0),
      IsAllDay: true
    }],
    fields: {
      subject:{ name: 'EventTitle', default: "Meeting", title: "Enter title"},
      startTime: { name: 'EvenStart'},
      endTime: {name: 'EvenEnd'}
    }
  }
}
