import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcknowledgePage } from './acknowledge';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../../app/app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AcknowledgePage,
  ],
  imports: [
    IonicPageModule.forChild(AcknowledgePage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
})
export class AcknowledgePageModule {}
