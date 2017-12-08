import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from "../environment";
import { CommuteAvg } from '../pages/commute-avg/commute-avg';
import { CommuteMain } from '../pages/commute-main/commute-main';
import { SettingIncome } from '../pages/setting-income/setting-income';
import { SettingHourlyWage } from '../pages/setting-hourly-wage/setting-hourly-wage';
import { CommuteMinMax } from '../pages/commute-min-max/commute-min-max';
import { SettingHoliday } from '../pages/setting-holiday/setting-holiday';
import { CommuteOvertime } from '../pages/commute-overtime/commute-overtime';
import { CommuteTabs } from '../pages/commute-tabs/commute-tabs';
import { Setting } from '../pages/setting/setting';
import { SettingGoTime } from '../pages/setting-go-time/setting-go-time';
import { SettingOutTime } from '../pages/setting-out-time/setting-out-time';
import { Login } from '../pages/login/login';
import { NgCalendarModule } from 'ionic2-calendar/calendar.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CommuteMain, CommuteAvg, CommuteMinMax, CommuteOvertime, Setting, SettingGoTime, SettingOutTime,
    SettingIncome, SettingHourlyWage, SettingHoliday, CommuteTabs, Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CommuteMain, CommuteAvg, CommuteMinMax, CommuteOvertime, Setting, SettingGoTime, SettingOutTime,
    SettingIncome, SettingHourlyWage, SettingHoliday, CommuteTabs, Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
