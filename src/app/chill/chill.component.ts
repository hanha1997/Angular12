import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chill',
  templateUrl: './chill.component.html',
  styleUrls: ['./chill.component.css']
})
export class ChillComponent implements OnInit{
  @Input() name:string = '';
  @Output() chillCall: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
  ngOnInit() {
  }
  public callParents() {
    this.chillCall.emit(this.name);
    console.log(123);

  }
  public chotien(amount: number)
  {
    console.log('cho',amount);
  }
}

