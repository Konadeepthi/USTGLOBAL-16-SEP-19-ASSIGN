import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapparentComponent } from './lapparent.component';

describe('LapparentComponent', () => {
  let component: LapparentComponent;
  let fixture: ComponentFixture<LapparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
