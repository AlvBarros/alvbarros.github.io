import { Component } from '@angular/core';
import { LevelTable, LevelTableItem } from 'src/app/common/level-table/level-table';

@Component({
  selector: 'profile-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  title: String = "Skills";

  table: LevelTable = new LevelTable([
    new LevelTableItem("Angular", 90),
    new LevelTableItem("CSS", 90),
    new LevelTableItem("C#", 90),
    new LevelTableItem("HTML", 90),
    new LevelTableItem("Ionic", 90),
    new LevelTableItem("JavaScript", 90),
    new LevelTableItem("Node.js", 90),
    new LevelTableItem("Flutter", 80),
    new LevelTableItem("SQL", 70),
    new LevelTableItem("Java", 60),
  ]);
}
