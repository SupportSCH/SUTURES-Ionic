import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { DepartmentsPageModule } from '../pages/departments/departments.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { MachinesPageModule } from '../pages/machines/machines.module';
import { ServiceProvider } from '../providers/service/service';
import { ConstantProvider } from '../providers/constant/constant';
import { ChecklistPageModule } from '../pages/checklist/checklist.module';
import { ChecklistApprovalPageModule } from '../pages/checklist-approval/checklist-approval.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SetMachineIdlePageModule } from '../pages/set-machine-idle/set-machine-idle.module';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    DashboardPageModule,
    DepartmentsPageModule,
    SettingsPageModule,
    MachinesPageModule,
    ChecklistPageModule,
    ChecklistApprovalPageModule,
    LoginPageModule,
    SetMachineIdlePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ConstantProvider,
    DatePicker,
    BarcodeScanner
  ]
})
export class AppModule {}
