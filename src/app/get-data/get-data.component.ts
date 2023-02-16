import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../Services/http-service.service";

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit{
  constructor(private httpServeService: HttpServiceService) {
  }
  ngOnInit():void {
    this.httpServeService.getComments().subscribe(data => {
      console.log(data);
    })
  }
}
