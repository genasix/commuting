import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteMinMax } from './commute-min-max';

@NgModule({
  declarations: [
    CommuteMinMax,
  ],
  imports: [
    IonicPageModule.forChild(CommuteMinMax),
  ],
})
export class CommuteMinMaxModule {}
