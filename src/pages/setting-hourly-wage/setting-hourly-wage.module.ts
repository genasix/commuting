import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingHourlyWage } from './setting-hourly-wage';

@NgModule({
  declarations: [
    SettingHourlyWage,
  ],
  imports: [
    IonicPageModule.forChild(SettingHourlyWage),
  ],
})
export class SettingHourlyWageModule {}
