import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;
import {User} from "../model/User";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {CommuteManager} from "../manager/CommuteManager";
import {Commute} from "../model/Commute";
import * as moment from 'moment';

export class CommuteManagerService implements CommuteManager {
  users: AngularFireList<User[]>;
  db :AngularFireDatabase;
  format: string = 'YYYY-MM-DD(ddd) HH:mm:SS';

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
  getTodayCommuteInfo(day: Date): Commute {
    let today = moment().format(this.format);
    return {
      id: '0',
      day: today,
      go: today,
      out: today,
      overtime: today,
      workingTime: today
    }
  }
}
