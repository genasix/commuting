import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingGoTime } from './setting-go-time';

@NgModule({
  declarations: [
    SettingGoTime,
  ],
  imports: [
    IonicPageModule.forChild(SettingGoTime),
  ],
})
export class SettingGoTimeModule {}
