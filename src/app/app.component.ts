import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'pipes';
  name: string = '';
  date: string = '';
  money: number = 0;
  height: number = 0;
  miles: number = 0;

  lessons = {
    lesson: 'Math',
    subject: 'Numbers',
    Note:55
  }

  getInputValue(value: string) {
    this.name=value
  }
  onDateChange(value: string) {
    this.date=value
    console.log(value)
  }
  onMoneyChange(value: string) {
    this.money=parseFloat(value)
    console.log(value)
  }
  onHeightChange(value: string) {
    this.height=parseFloat(value)
    console.log(value)
  }
  onMilesChange(value: string) {
    this.miles=parseFloat(value)
    console.log(value)
  }
}
