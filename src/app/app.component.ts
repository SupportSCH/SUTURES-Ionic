import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { ServiceProvider } from '../providers/service/service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: any, component: any}>;

  constructor(private screenOrientation: ScreenOrientation,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public serviceProvider: ServiceProvider,
    private translate: TranslateService) 
    {

    this.initializeApp();

    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', icon: 'home', component: DashboardPage },
      { title: 'Settings', icon: 'construct', component: SettingsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.translate.setDefaultLang('en');
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  // used to Logout the user
  Logout() {
    localStorage.removeItem("userRole");
    this.nav.setRoot('LoginPage');
  }
}
