import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skills-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input()
  value: Number;
}
