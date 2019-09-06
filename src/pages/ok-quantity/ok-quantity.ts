import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-ok-quantity',
  templateUrl: 'ok-quantity.html',
})
export class OkQuantityPage {

  okquantity: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
  }

  pop() {
    this.serviceProvider.Quantity[0].ok = this.okquantity;
    this.navCtrl.pop();
  }

}
