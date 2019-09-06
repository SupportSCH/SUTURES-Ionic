import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-checklist-approval',
  templateUrl: 'checklist-approval.html',
})
export class ChecklistApprovalPage {

  // Constructor
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private serviceProvider: ServiceProvider) {
       
  }

  ionViewDidLoad() {
  }

  //  This will create a maintanence Ticket
  createMaintanenceTicket() {
    this.navCtrl.push('SetMachineIdlePage');
  }

  // This will Approve the Tickets that have been created by the Operator
  approve() {
    this.serviceProvider.showToast('Ticket Approved!'); 
  }

}
