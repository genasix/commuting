import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  today;
  constructor(public navCtrl: NavController) {
    this.today = new Date();
  }
}
