import {Statistics} from '../model/Statistics'
import {OverTime} from "../model/OverTime";
import {Commute} from "../model/Commute";

export interface CommuteManager {
  createCommuting(id: string, go: Date, out: Date): void
  getCommuting(id: string, from: Date, to: Date): Date
  updateCommuting(id: string, go: Date, out: Date, day: Date): void
  deleteCommuting(id: string, day: Date): void
  getOverTime(id: string, from: Date, to: Date): OverTime[]
  getStatistics(id: string, from: Date, to: Date): Statistics
  getTodayCommuteInfo(id: string, day: Date): Commute
}
