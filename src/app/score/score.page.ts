import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})

export class ScorePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  homePage() {
    this.route.navigate(['/home']);
  }

  no = 0;

  up(){
    this.no++;
  }

  down(){
    if (this.no > 0) {
      this.no--;
    }
    else {
      this.no == 0;
    }
  }

}
