import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTableComponent } from './level-table.component';

describe('LevelTableComponent', () => {
  let component: LevelTableComponent;
  let fixture: ComponentFixture<LevelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
