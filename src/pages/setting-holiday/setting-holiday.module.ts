import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingHoliday } from './setting-holiday';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    SettingHoliday,
  ],
  imports: [
    IonicPageModule.forChild(SettingHoliday),
    NgCalendarModule
  ],
})
export class SettingHolidayModule {}
