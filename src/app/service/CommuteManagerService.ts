import * as firebase from "firebase";
import AuthProvider = firebase.auth.AuthProvider;
import {User} from "../model/User";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {CommuteManager} from "../manager/CommuteManager";
import {Commute} from "../model/Commute";
import * as moment from 'moment';
import { Statistics } from "../model/Statistics";
import { OverTime } from "../model/OverTime";
import { Injectable } from "@angular/core";

@Injectable()
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
  createCommuting(id: string, go: Date, out: Date): void{
    throw new Error("Method not implemented.");
    
  }
  getCommuting(id: string, from: Date, to: Date): Date{
    throw new Error("Method not implemented.");
    
  }
  updateCommuting(id: string, go: Date, out: Date, day: Date): void{
    throw new Error("Method not implemented.");
    
  }
  deleteCommuting(id: string, day: Date): void{
    throw new Error("Method not implemented.");
    
  }
  getOverTime(id: string, from: Date, to: Date): OverTime[]{
    throw new Error("Method not implemented.");
    
  }
  getStatistics(id: string, from: Date, to: Date): Statistics{
    return {
      min: 1,
      max: 100,
      avg: 50,
      total: 150,
      standardDeviation: 0
    }    
  }
}
