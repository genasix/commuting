import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {CommuteManagerService} from "../../app/service/CommuteManagerService";
import * as moment from 'moment';

/**
 * Generated class for the CommuteMain page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-commute-main',
  templateUrl: 'commute-main.html',
})
export class CommuteMain {
  db :AngularFireDatabase;
  go: string;
  out: string;
  overtime: number;
  dateFormat: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    let commuteManagerService = new CommuteManagerService(this.db);
    this.dateFormat = 'YYYY-MM-DD HH:mm:SS';
    let info = commuteManagerService.getTodayCommuteInfo('0', moment().format(this.dateFormat));
    this.go = info.go;
    this.out = info.out;
    this.overtime = info.overtime;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommuteMain');
  }

}

