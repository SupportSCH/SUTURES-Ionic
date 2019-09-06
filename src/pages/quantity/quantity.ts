import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-quantity',
  templateUrl: 'quantity.html',
})
export class QuantityPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public serviceProvider: ServiceProvider) {

  }

  ionViewDidLoad() {
  }

  // This will navigate to the Dashboard Page
  gotoRootPage() {
    this.navCtrl.popToRoot();
  }

  gotoOKQuantity() {
    this.navCtrl.push('OkQuantityPage');
  }

  gotoReworkQuantity() {
    this.navCtrl.push('ReworkQuantityPage');
  }

  gotoRejectedQuantity() {
    this.navCtrl.push('RejectQuantityPage');
  }


}
