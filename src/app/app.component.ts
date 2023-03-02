import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-and-register-example';

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }
  ngOnInit() {
  }
}

