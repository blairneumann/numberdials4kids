import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberDialComponent } from './number-dial/number-dial.component';
import { NumberGroupComponent } from './number-group/number-group.component';
import { HeaderComponent } from './app-header/header.component';
import { FooterComponent } from './app-footer/footer.component';

import Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_VERTICAL, }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NumberDialComponent,
    NumberGroupComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppComponent,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
