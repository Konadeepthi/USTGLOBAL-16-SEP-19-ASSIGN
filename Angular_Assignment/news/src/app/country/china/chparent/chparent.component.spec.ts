import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChparentComponent } from './chparent.component';

describe('ChparentComponent', () => {
  let component: ChparentComponent;
  let fixture: ComponentFixture<ChparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
