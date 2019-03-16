import { HelperService } from './../../services/helper.service';
import { HttpServiceService } from '../../services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { DisplayPage } from '../display/display.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.scss'],
})
export class UserInteractionPage implements OnInit {

  user_value: number = 0; // n enter by user
  user_name: string = ''; // name of the user pass from home
  loading: boolean = false; // show loading text

  constructor(private _activateRoute: ActivatedRoute, private _httpService: HttpServiceService, private navCtrl: NavController,
    private _storage: Storage, private _toastController: ToastController, private _helper: HelperService) { }

  ngOnInit() {

    //initial init
    this.loading = false;
    this.user_value = 0;
    this.user_name = '';
    this._storage.remove('ttt_text_data');
    this._activateRoute.params.subscribe(params => this.user_name = params['user_name']);
  }

  fetchData(event: any = null) {
    //event.keyCode == 13 && this.user_value for handle enter key inside text box

    if (!event || (event.keyCode == 13 && this.user_value)) {
      this.loading = true;
      this._httpService.getData().subscribe(data => {
        this.toastNotification('Data Fetched');
        const frequencyArray = this._helper.treatmentOnData(data);
        frequencyArray.push(this.user_value);

        //stroage service
        this._storage.set('ttt_text_data', JSON.stringify(frequencyArray));

        this.loading = false;
        this.navCtrl.navigateForward('/display');
      }, err => {
        this.loading = false;
        this.toastNotification('Something went wrong, try again!!', true)
      });
    }

  }

  async toastNotification(message: string, showButton: boolean = false) {
    const toast = await this._toastController.create({
      message: message,
      duration: 2000,
      ...(showButton && { showCloseButton: true, position: 'top', closeButtonText: 'Ok' }) // conditionaly add property to object using spread operator
    });
    toast.present();
  }

}
