import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteOvertime } from './commute-overtime';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    CommuteOvertime,
  ],
  imports: [
    IonicPageModule.forChild(CommuteOvertime),
    NgCalendarModule
  ],
})
export class CommuteOvertimeModule {}
