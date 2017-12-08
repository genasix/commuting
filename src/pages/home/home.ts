import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import {UserManagerService} from "../../app/service/UserManagerService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  auth = firebase.auth();
  db :AngularFireDatabase;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/user').valueChanges();
    this.db = db;
  }

  test() {
    const userManagerService = new UserManagerService(this.db);
    userManagerService.createUser("shlee", 100)

  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("success", user);
      } else {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

      }
    })
  }

  logout() {

  }

}
