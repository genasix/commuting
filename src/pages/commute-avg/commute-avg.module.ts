import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteAvg } from './commute-avg';

@NgModule({
  declarations: [
    CommuteAvg,
  ],
  imports: [
    IonicPageModule.forChild(CommuteAvg),
  ],
})
export class CommuteAvgModule {}
