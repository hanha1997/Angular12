import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../Services/http-service.service";

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit{
  constructor(private httpServeService: HttpServiceService) {
  }
  ngOnInit():void {
    const payload = {
      body:"đây là message",
      postId:3
    }
    this.httpServeService.postComments(payload).subscribe(data => {
      console.log(data);
    })
  }
}
