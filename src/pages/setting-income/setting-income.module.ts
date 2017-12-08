import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingIncome } from './setting-income';

@NgModule({
  declarations: [
    SettingIncome,
  ],
  imports: [
    IonicPageModule.forChild(SettingIncome),
  ],
})
export class SettingIncomeModule {}
