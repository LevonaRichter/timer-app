import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core-modules/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RocketTakeOffComponent } from '../feature-modules/rockets-to-mars/components/rocket-take-off.component';
import { RocketTakeOffModule } from '../feature-modules/rockets-to-mars/rocket-take-off.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoreModule,
    RocketTakeOffModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
