import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChchildComponent } from './chchild.component';

describe('ChchildComponent', () => {
  let component: ChchildComponent;
  let fixture: ComponentFixture<ChchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
