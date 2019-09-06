import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public navParams: NavParams,
    private serviceProvider: ServiceProvider) {

  }

  ionViewDidLoad() {
  }

  checkConnection() {
    this.serviceProvider.showToast('Server Not Connected!')
  }

  /**
   * This will navigate to the Machines page
   * 
   * @param data = 1
   * The request is from 5sCheckList
   * 
   * @param data = 2
   * The request is from Machine Idle time set/reset
   */
  gotoMachinesPage(data) {
    this.navCtrl.push('DepartmentsPage', {
      'requestFrom': data
    });
  }

  // This will navigate to the acknowledge page
  gotoAcknowledge() {
    this.navCtrl.push('JobcardPage');
  }

  // This will navigate to the Jobcard Page
  gotoAssign() {
    this.navCtrl.push('JobcardPage');
  }

  // This will navigate to the checklist approval page
  gotoChecklistApproval() {
    this.navCtrl.push('ChecklistApprovalPage');
  }

  // This will navigate to the Quantity Page
  gotoQuantity(requestFrom) {
    this.navCtrl.push('QuantityPage', {
      'requestFrom': requestFrom
    });
  }

  /**
   * This will Scan and validate the Jobcard
   * 
   * @param 1 -> This request is from Pause a Jobcard
   * 
   * @param 2 -> This request is from Continue a Jobcard
   * 
   * @param 3 -> This request is from Close the Current Jobcard
   * 
   * @param 4 -> This request is from Order Confimation
   */
  scanJobcard(requestFrom) {
    this.barcodeScanner.scan().then(barcodeData => {

      if (barcodeData.text == 'JOBCARD' && requestFrom == 1) {
        this.serviceProvider.showToast('Jobcard Scanned!')
        this.gotoQuantity(requestFrom);

      } else if (barcodeData.text == 'JOBCARD' && requestFrom == 2) {
        this.serviceProvider.showToast('Jobcard Scanned!')
        this.gotoQuantity(requestFrom);

      } else if (barcodeData.text == 'JOBCARD' && requestFrom == 3) {
        this.serviceProvider.showToast('Jobcard Scanned!')
        this.gotoQuantity(requestFrom);

      } else if (barcodeData.text == 'JOBCARD' && requestFrom == 4) {
        this.serviceProvider.showToast('Jobcard Scanned!')
        this.gotoQuantity(requestFrom);

      } else if (barcodeData.text == 'JOBCARD' && requestFrom == 5) {
        this.serviceProvider.showToast('Jobcard Scanned!')
        this.gotoAssign();

      } else {
        this.serviceProvider.showToast('Not a Valid Jobcard!')
      }

    }, (err) => {
      console.log('Error:', err);
    });
  }


}
