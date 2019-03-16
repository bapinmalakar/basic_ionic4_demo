import { HelperService } from './../../services/helper.service';
import { ToastController, NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})

export class DisplayPage implements OnInit {
  valueIs: any[] = [];
  user_value: number = 0;

  constructor(private _storage: Storage, private _toastController: ToastController, 
    private _helper: HelperService, private navCtrl: NavController,private _navigate: Router) { }

  ngOnInit() {
    this.valueIs = [];
    this._storage.get('ttt_text_data').then(val=> {
      if(!val) {
        this.toastNotification('No data found, try to fetch again!!');
        this._navigate.navigateByUrl('/home');
      } else {
        val = JSON.parse(val);
        this.user_value = val.pop();
        
        if(this.user_value >= val.length) {
          this.valueIs = val;
        } else {
          this.valueIs = val.slice(0, this.user_value);
        }
         
      }
    });
  }

  async toastNotification(message: string) {
    const toast = await this._toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

}
