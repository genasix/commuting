import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingIncome page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting-income',
  templateUrl: 'setting-income.html',
})
export class SettingIncome {
  title : String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingIncome');
  }

}
