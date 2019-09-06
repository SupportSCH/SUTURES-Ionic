import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-acknowledge',
  templateUrl: 'acknowledge.html',
})
export class AcknowledgePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
  }

  // This will scan and acknowledge the Jobcard
  acknowledge() {
    this.serviceProvider.showToast('Jobcard Acknowledged!')
  }

}
