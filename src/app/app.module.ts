import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';    // To enable use of http protocol to talk to the web/remote API
import { Flashlight } from '@ionic-native/flashlight/ngx';  // To enable use of the plugin to communicate with the device's native flaslight feature 
import {IonicStorageModule} from '@ionic/storage';          // To enable use of the cordova plugin to facilitate the use of local storage on the device in any component
import {FormsModule} from '@angular/forms';                 // To allow two way data binding of input data

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot(),FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


//Note: HttpClientModule added to imports array to make it accessable in the app and therefore possible to communicate with API
// IonicStorage module added to imports array to facilitate use of local storage