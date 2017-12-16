import {Statistics} from '../model/Statistics'
import {OverTime} from "../model/OverTime";
import {Commute} from "../model/Commute";

export interface CommuteManager {
  outCommute(id:string, out:string);
  goCommute(id:string, go:string);
  getCommuting(id: string, from: Date, to: Date): Date
  updateCommuting(id: string, go: Date, out: Date, day: Date): void
  deleteCommuting(id: string, day: Date): void
  getOverTime(id: string, from: Date, to: Date): OverTime[]
  getStatistics(id: string, from: Date, to: Date): Statistics
  getTodayCommuteInfo(id: string, day: string): Commute
  getAllCommuteInfo(id:string);
}
