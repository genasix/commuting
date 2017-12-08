import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteTabs } from './commute-tabs';

@NgModule({
  declarations: [
    CommuteTabs,
  ],
  imports: [
    IonicPageModule.forChild(CommuteTabs),
  ],
})
export class CommuteTabsModule {}
