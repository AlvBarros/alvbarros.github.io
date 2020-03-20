import { Component, OnInit } from '@angular/core';
import { LevelTable, LevelTableItem } from 'src/app/common/level-table/level-table';

@Component({
  selector: 'profile-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css', '../../profile/profile.component.css']
})
export class LanguagesComponent {
  title: String = "Languages";
  
  table: LevelTable = new LevelTable([
    new LevelTableItem("Portuguese", 100),
    new LevelTableItem("English", 90),
    new LevelTableItem("Spanish", 30),
  ]);
}
