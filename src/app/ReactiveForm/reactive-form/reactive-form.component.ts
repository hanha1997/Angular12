import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {CommonService} from "../../Services/common.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // public formData:FormGroup =  new FormGroup({
  //     name: new FormControl(''),
  //     age: new FormControl('')
  // })

  public formData2 = this.formBuilder.group({
    name:['', Validators.required],
    age: ['', Validators.required]
  });
  public onSubmit():void {
    console.log(this.formData2.value)
  }
  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit() :void{
  }
}
