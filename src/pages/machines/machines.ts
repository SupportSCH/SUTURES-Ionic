import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-machines',
  templateUrl: 'machines.html',
})
export class MachinesPage {

  Machines: any = [];

  requestFrom: any; // To find the request page

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider) {
    this.requestFrom = navParams.get('requestFrom');
  }
  
  ionViewDidLoad() {
    this.fetchMachines();
  }

  // fetching the machines data from the server
  fetchMachines() {
    this.serviceProvider.fetchMachines()
      .subscribe(response => {
        this.Machines = response;
      })
  }

  gotoNextPage() {
    if (this.requestFrom == 2) {
      this.navCtrl.push('SetMachineIdlePage')
    } else if (this.requestFrom == 3) {
      this.navCtrl.push('ChecklistPage');
    }
  }

}
