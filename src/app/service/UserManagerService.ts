import {UserManager} from "../manager/UserManager";
import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;
import {User} from "../model/User";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {query} from "@angular/core/src/animation/dsl";

export class UserManagerService implements UserManager {


  users: AngularFireList<User[]>;
  db :AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  createUser(id: string, pay: number): void {
    this.db.list("/user").push(new User(id,pay));
  }

  getUser(id: string): User {
    throw new Error("Method not implemented.");
  }

  updateUser(user: User): void {
    throw new Error("Method not implemented.");
  }

  deleteUser(id: string): void {
    throw new Error("Method not implemented.");
  }

  login(authProvider: AuthProvider): void {
    throw new Error("Method not implemented.");
  }

  logout(): void {
    throw new Error("Method not implemented.");
  }


}
