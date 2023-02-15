import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'Hân Hà';
  public age = 15;
  public fruits = ["TAO", "CAM", "OI", "NHO"];
  public fruit2 = [
    {ten:'Táo', gia: 4000},
    {ten:'Nho', gia:  3000},
    {ten:'Cam', gia:  5000},
  ];
  constructor() {
  }
  ngOnInit():void {
    console.log("fruits"+ this.fruits);
  }
}
