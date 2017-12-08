import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommuteMain } from '../commute-main/commute-main';
import { SettingGoTime } from '../setting-go-time/setting-go-time';
import { SettingOutTime } from '../setting-out-time/setting-out-time';
import { SettingIncome } from '../setting-income/setting-income';
import { SettingHourlyWage } from '../setting-hourly-wage/setting-hourly-wage';
import { SettingHoliday } from '../setting-holiday/setting-holiday';
/**
 * Generated class for the Setting page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {
  settingLists = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingLists = [
      {
        "title":  "출근시간 설정",
        "page": SettingGoTime
      },
      {
        "title": "퇴근시간 설정",
        "page": SettingOutTime
      },
      {
        "title": "연봉 설정",
        "page": SettingIncome
      },
      {
        "title": "시급 설정",
        "page": SettingHourlyWage
      },
      {
        "title": "휴일 설정",
        "page": SettingHoliday
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

  goToOtherPage(item){
    // console.log(item.page);
    this.navCtrl.push(item.page, item.title);
  }


}
