import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;
import {User} from "../model/User";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {CommuteManager} from "../manager/CommuteManager";
import {Commute} from "../model/Commute";
import moment = require("moment");

export class CommuteManagerService implements CommuteManager {
  users: AngularFireList<User[]>;
  db :AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
  getTodayCommuteInfo(day: Date): Commute {
    return {
      id: '0',
      day: moment(),
      go: moment(),
      out: moment(),
      overtime: moment(),
      workingTime: moment()
    }
  }
}
