import { Component, OnInit, Input } from '@angular/core';
import { LevelTable } from './level-table';

@Component({
  selector: 'app-level-table',
  templateUrl: './level-table.component.html',
  styleUrls: ['./level-table.component.css']
})
export class LevelTableComponent{
  @Input()
  title: String;
  
  @Input()
  table: LevelTable;
}
