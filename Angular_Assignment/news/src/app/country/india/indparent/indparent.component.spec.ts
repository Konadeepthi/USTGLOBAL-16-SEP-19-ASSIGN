import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndparentComponent } from './indparent.component';

describe('IndparentComponent', () => {
  let component: IndparentComponent;
  let fixture: ComponentFixture<IndparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
