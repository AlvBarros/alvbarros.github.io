import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './about-me/profile/profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeModule } from './about-me/about-me.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AboutMeModule,
      FontAwesomeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
