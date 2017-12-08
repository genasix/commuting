import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommuteOvertime page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commute-overtime',
  templateUrl: 'commute-overtime.html',
})
export class CommuteOvertime {
  calendar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calendar ={
      mode: 'month',
      currentDate: new Date(),
      // locale: 'ko-KR'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommuteOvertime');
  }

}
