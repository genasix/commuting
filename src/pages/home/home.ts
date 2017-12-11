import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UserManagerService } from '../../app/service/UserManagerService';
import * as moment from 'moment'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  auth = firebase.auth();
  database :AngularFireDatabase;
  today;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    moment.locale('ko');
    this.today = moment().format('YYYY-MM-DD(ddd)');
    this.database = db;
    this.items = this.database.list('/user').valueChanges();

  }

  test() {
    const userManagerService = new UserManagerService(this.database);
    userManagerService.createUser("woori", 100)

  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("success", user);
        console.log(typeof user);


      } else {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

      }
    })
  }


  logout() {

  }
}
