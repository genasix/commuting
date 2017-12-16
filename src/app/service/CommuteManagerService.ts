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
  format: string = 'YYYY-MM-DD HH:mm:SS';

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.db.list('/commuting').valueChanges().subscribe(o => {console.log(JSON.stringify(o))})
  }

  isGoExist(commutes:string, id:string){
    return [].every.call(JSON.parse(commutes),function (commute) {
      return commute.id ==id && commute.day == moment().format("YYYY-MM-DD")
    })
  }

  isCommuteExist(commutes:string, id:string){
    [].filter.call(commutes,function (commute) {

    });
    this.db.list('/commuting').valueChanges().subscribe(o => {console.log(JSON.stringify(o))})
  }

  getTodayCommuteInfo(id: string, day: string): Commute {
    let today = moment().format(this.format);
    return new Commute('0',today,today,today,0,0);

  }

  outCommute(id:string, out:string){
    this.db.list('/commuting').valueChanges().subscribe(o => {if(this.isCommuteExist(JSON.stringify(o),id)) {
      //todo update out..
    }})

  }
  goCommute(id:string, go:string){
    let today : string = moment().format("YYYY-MM-DD");
    this.db.list("/commuting").valueChanges().subscribe(o=>{if(!this.isGoExist(JSON.stringify(o),id)){
      this.db.list("/commuting").push(new Commute(id, moment().format("YYYY-MM-DD"),go,"",0,0));
    }})
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
