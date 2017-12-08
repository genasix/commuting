import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteMain } from './commute-main';

@NgModule({
  declarations: [
    CommuteMain,
  ],
  imports: [
    IonicPageModule.forChild(CommuteMain),
  ],
})
export class CommuteMainModule {}
