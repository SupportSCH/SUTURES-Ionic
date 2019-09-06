import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-jobcard',
  templateUrl: 'jobcard.html',
})
export class JobcardPage {

  changedMachine: any = "default";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider,
    private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
  }

  // This will trigger a popup and shows the Availbale Machine to choose
  changeMachine() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Machine');

    alert.addInput({
      type: 'radio',
      label: 'Machine 1',
      value: 'Machine 1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Machine 2',
      value: 'Machine 2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Machine 3',
      value: 'Machine 3',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.changedMachine = data;
      }
    });
    alert.present();
  }

  // This will pop to the root page
  pop() {
    this.navCtrl.popToRoot();
  }

}
