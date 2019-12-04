import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapchildComponent } from './lapchild.component';

describe('LapchildComponent', () => {
  let component: LapchildComponent;
  let fixture: ComponentFixture<LapchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
