import { Component } from '@angular/core';
import { LevelTable, LevelTableItem } from 'src/app/common/level-table/level-table';

@Component({
  selector: 'profile-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../profile/profile.component.css']
})
export class SkillsComponent {
  title: String = "Skills";

  table: LevelTable = new LevelTable([
    new LevelTableItem("Angular", 95),
    new LevelTableItem("CSS", 95),
    new LevelTableItem("C#", 95),
    new LevelTableItem("HTML", 95),
    new LevelTableItem("Ionic", 95),
    new LevelTableItem("JavaScript", 95),
    new LevelTableItem("Node.js", 90),
    new LevelTableItem("Flutter", 80),
    new LevelTableItem("SQL", 70),
    new LevelTableItem("Java", 60),
  ]);
}
