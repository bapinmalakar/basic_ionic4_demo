import { HelperService } from './services/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './services/http-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from './component/home/home.page';
import { UserInteractionPage } from './component/user-interaction/user-interaction.page.';
import {DisplayPage} from './component/display/display.page';

@NgModule({
  declarations: [AppComponent, HomePage, UserInteractionPage, DisplayPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    HttpServiceService,
    HelperService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
