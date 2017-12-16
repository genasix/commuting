export class Commute {
  constructor(id: string, day: string, go: string, out: string, overtime: number, workingTime: number){

    this.workingTime = workingTime;
    this.overtime = overtime;
    this.out = out;
    this.go = go;
    this.day = day;
    this.id = id;
  }
  id: string
  day: string;
  go: string
  out: string
  overtime: number
  workingTime: number
}
