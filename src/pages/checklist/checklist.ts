import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

  Checklist: any = [];

  requestFrom: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider) {
    this.requestFrom = navParams.get('requestFrom');
  }

  ionViewDidLoad() {
    this.fetchCheckList();
  }

  // fetch the Checklist from the server
  fetchCheckList() {
    this.serviceProvider.fetchCheckList()
      .subscribe(response => {
        this.Checklist = response;
      })
  }

  // this will navigate to the dashboard page
  gotoDashboardPage() {
    this.navCtrl.popToRoot();
  }

}
