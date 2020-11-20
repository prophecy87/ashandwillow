import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [{'image':`assets/images/carousel-image0.png`},
            {'image':`assets/images/carousel-image1.png`}, 
            {'image':`assets/images/carousel-image2.png`}];

  constructor() { }

  ngOnInit(): void {
  }


}
