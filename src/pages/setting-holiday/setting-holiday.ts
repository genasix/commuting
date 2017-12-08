import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SettingHoliday page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting-holiday',
  templateUrl: 'setting-holiday.html',
})
export class SettingHoliday {
  title : String;
  calendar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data;
    this.calendar ={
      mode: 'month',
      currentDate: new Date(),
      // locale: 'ko-KR'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingHoliday');
  }

  onTimeSelected(event){ // 달력 날짜 선택시 호출
    console.log(event.selectedTime);
  }
}
