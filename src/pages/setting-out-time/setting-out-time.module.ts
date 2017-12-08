import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingOutTime } from './setting-out-time';

@NgModule({
  declarations: [
    SettingOutTime,
  ],
  imports: [
    IonicPageModule.forChild(SettingOutTime),
  ],
})
export class SettingOutTimeModule {}
