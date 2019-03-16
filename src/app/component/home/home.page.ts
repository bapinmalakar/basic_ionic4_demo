import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user_name: string = '';
  constructor(private _navigate: Router){}

  navigateToHome(event: any = null) { // handle enter entry also
    if(!event || (event && event.keyCode == 13 && this.user_name)) this._navigate.navigateByUrl('/user_interaction/' + this.user_name);
  }
}
