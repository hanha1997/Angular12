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
    {ten:'Táo', gia: 4000, hagia:false},
    {ten:'Nho', gia:  3000, hagia: true},
    {ten:'Cam', gia:  5000, hagia: false},
  ];
  public districts: string[] = ['Quận Huyện'];
  public cities = [
    {
      city: "Chọn Thành Phố",
      district: ["Quận/Huyện"]
    },
    {
      city:"An Giang",
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"
      ]
    },
    {
      city:"Bà Rịa - Vũng Tàu",
      district: [
        "Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"
      ]
    },
    {
      city:"Bạc Liêu",
      district: [
        "Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"
      ]
    }
  ]

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }

    //c1
    // const search = this.cities.filter(data => data.city === city);
    // console.log(search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    //c2
    this.districts = this.cities.find(data => data.city === city)?.district || []
  }
  constructor() {
  }
  ngOnInit():void {
  }
}
