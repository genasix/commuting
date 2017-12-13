import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { CommuteManagerService } from '../../app/service/CommuteManagerService';
import { AngularFireDatabase } from 'angularfire2/database';
import { stagger } from '@angular/core/src/animation/dsl';

/**
 * Generated class for the CommuteMinMax page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commute-min-max',
  templateUrl: 'commute-min-max.html',
})
export class CommuteMinMax {
  toDate;
  fromDate;
  max;
  min;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commuteManagerService:CommuteManagerService,
    private db:AngularFireDatabase)
  {
      commuteManagerService = new CommuteManagerService(db);
      // this.toDate = moment().format("YYYY-MM");
      // this.fromDate = moment().format("YYYY-MM");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommuteMinMax');
  }

  // printFrom(){
  //   console.log(this.fromDate);
  // }
  
  // printTo(){
  //   console.log(this.toDate);
  // }

  getStatistics(){
    if(this.toDate && this.fromDate){
      let statistics = this.commuteManagerService.getStatistics("test", moment().toDate(), moment().toDate());
      this.max = statistics.max;
      this.min = statistics.min;
    }
  }
}
