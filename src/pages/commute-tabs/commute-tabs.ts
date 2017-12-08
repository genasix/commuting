import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommuteMain } from '../commute-main/commute-main';
import { CommuteOvertime } from '../commute-overtime/commute-overtime';
import { CommuteMinMax } from '../commute-min-max/commute-min-max';
import { CommuteAvg } from '../commute-avg/commute-avg';
/**
 * Generated class for the CommuteTabs page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-commute-tabs',
  templateUrl: 'commute-tabs.html',
})
export class CommuteTabs {
  tab1Root = CommuteMain;
  tab2Root = CommuteOvertime;
  tab3Root = CommuteMinMax;
  tab4Root = CommuteAvg;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommuteTabs');
  }

}
