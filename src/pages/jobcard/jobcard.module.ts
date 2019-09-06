import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobcardPage } from './jobcard';

@NgModule({
  declarations: [
    JobcardPage,
  ],
  imports: [
    IonicPageModule.forChild(JobcardPage),
  ],
})
export class JobcardPageModule {}
