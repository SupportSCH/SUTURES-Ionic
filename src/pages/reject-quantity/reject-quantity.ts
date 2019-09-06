import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-reject-quantity',
  templateUrl: 'reject-quantity.html',
})
export class RejectQuantityPage {

  // Declaring the NGModel
  rejected: any;

  eccentricity: any = 0;
  padmark: any = 0;
  depth: any = 0;
  bend: any = 0;
  go: any = 0;

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

  calculate() {
    this.rejected = parseInt(this.eccentricity) + parseInt(this.padmark) + parseInt(this.depth) + parseInt(this.bend) + parseInt(this.go);
    this.serviceProvider.Quantity[0].reject = this.rejected;
  }

}
