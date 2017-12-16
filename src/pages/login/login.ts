import {Component ,ViewChild} from '@angular/core';
import {NavController, Nav} from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import {UserManagerService} from "../../app/service/UserManagerService";
import { HomePage } from '../home/home';
/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  @ViewChild(Nav) nav: Nav;

  items: Observable<any[]>;
  auth = firebase.auth();
  db :AngularFireDatabase;
  id :string;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    // this.items = db.list('/user').valueChanges();
    this.db = db;
  }

  setId(id:string){
    this.id = id;
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

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage);
  }
}
