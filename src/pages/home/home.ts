import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UserManagerService } from '../../app/service/UserManagerService';
import * as moment from 'moment';
import {CommuteManagerService} from "../../app/service/CommuteManagerService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isWent : boolean;
  items: Observable<any[]>;
  auth = firebase.auth();
  database :AngularFireDatabase;
  today;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    moment.locale('ko');
    this.today = moment().format('YYYY-MM-DD(ddd)');
    this.database = db;
    this.items = this.database.list('/user').valueChanges();
    this.isWent = false;

  }

  goCommute() {
   let service = new CommuteManagerService(this.database);
   service.goCommute("woori", moment().format("HH:mm:ss"))
  }

}
