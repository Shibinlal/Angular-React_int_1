import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'greet-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() username = '';
  @Input() password = '';

  @Output('login') login = new EventEmitter<any>();

  constructor() { }

  doLogin() {
    let user = {
      "username": this.username,
      "password": this.password
    };
    this.login.emit(user)
    console.log('emitting event');
  }
}
