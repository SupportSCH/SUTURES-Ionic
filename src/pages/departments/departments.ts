import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html',
})
export class DepartmentsPage {

  Departments: any = [];

  requestFrom: any; // To find the request page

  // Constructor
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private serviceProvider: ServiceProvider) {
      
    this.requestFrom = navParams.get('requestFrom');
  }

  ionViewDidLoad() {
    this.fetchDepartments();
  }

  // Fetching the Department Details from the Server
  fetchDepartments() {
    this.serviceProvider.fetchDepartments()
      .subscribe(response => {
        this.Departments = response;
      })
  }

  // This will navigate to the Machines Page
  gotoNextPage() {
    if (this.requestFrom == 1) {

      this.navCtrl.push('ChecklistPage');

    } else if (this.requestFrom == 2) {

      this.navCtrl.push('MachinesPage', {
        requestFrom: this.requestFrom
      });

    } else if (this.requestFrom == 3) {

      this.navCtrl.push('MachinesPage', {
        requestFrom: this.requestFrom
      });

    }
  }

}
