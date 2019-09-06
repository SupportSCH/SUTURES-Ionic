import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-rework-quantity',
  templateUrl: 'rework-quantity.html',
})
export class ReworkQuantityPage {

  rework: number;

  depth: any = 0;
  recheck: any = 0;

  // Constructor
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
  }

  pop() {
    this.calculate();
    this.navCtrl.pop();
  }

  // This will add all the fields and finally pushed to the service provider
  calculate() {
    this.rework = parseInt(this.depth) + parseInt(this.recheck);
    this.serviceProvider.Quantity[0].rework = this.rework;
  }

}
