import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SettingHourlyWage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting-hourly-wage',
  templateUrl: 'setting-hourly-wage.html',
})
export class SettingHourlyWage {
  title : String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingHourlyWage');
  }

}
