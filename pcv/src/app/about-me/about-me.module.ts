import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactDetailsComponent } from './profile-summary/contact-details/contact-details.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule, MatSlider } from '@angular/material/slider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './profile-summary/skills/skills.component';
import { LanguagesComponent } from './profile-summary/languages/languages.component';

import { SliderComponent } from '../common/slider/slider.component';
import { LevelTableComponent } from '../common/level-table/level-table.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    ProfilePictureComponent, 
    ProfileSummaryComponent, 
    ContactDetailsComponent, 
    SkillsComponent, 
    LanguagesComponent,
    
    SliderComponent, 
    LevelTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  exports: [
    ProfileComponent,
    ProfilePictureComponent,
    ProfileSummaryComponent,
    ContactDetailsComponent,
    SkillsComponent
  ]
})
export class AboutMeModule { }
