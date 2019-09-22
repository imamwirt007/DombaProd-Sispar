import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor() { }
  imageUrl = 'https://freedesignfile.com/upload/2017/09/Green-health-people-logo-vector.jpg';
  ngOnInit() {
  }

}
