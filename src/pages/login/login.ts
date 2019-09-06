import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider, 
    public barcodeScanner: BarcodeScanner) {

  }

  ionViewDidLoad() {
  }

  // This will open the QRcode Scanner 
  scanToLogin() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.text == "TL") {
        localStorage.setItem("userRole", "TL")
        this.serviceProvider.showToast('Logged In as Team Leader!')
        this.navCtrl.setRoot('DashboardPage');

      } else if (barcodeData.text == "OP") {
        localStorage.setItem("userRole", "OP")
        this.serviceProvider.showToast('Logged In as operator!')
        this.navCtrl.setRoot('DashboardPage');
      } else {
        this.serviceProvider.showToast('Authenication Invalid!')
      }
    }, (err) => {
      console.log('Error: ', err);
    });
  }

}
