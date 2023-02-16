import {Component, OnInit, ViewChild} from '@angular/core';
import {ChillComponent} from "../chill/chill.component";

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit{
  @ViewChild('thangteo') thangteo: ChillComponent | undefined
  @ViewChild('thangti') thangti :ChillComponent | undefined
  public messsage = '';
  public hillCall(name: string) {
    console.log('ege');
    this.messsage = 'callback' + name;
  }

  public chotien() {
    this.thangteo?.chotien(234);
    this.thangti?.chotien(10);
  }
  ngOnInit() {
  }
  constructor() {
  }
}
