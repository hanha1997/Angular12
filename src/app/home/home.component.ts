import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'Hân Hà';
  public age = 15;

  constructor() {
  }
  ngOnInit():void {
  }
}
