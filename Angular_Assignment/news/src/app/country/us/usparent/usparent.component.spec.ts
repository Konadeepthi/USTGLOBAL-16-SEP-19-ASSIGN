import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsparentComponent } from './usparent.component';

describe('UsparentComponent', () => {
  let component: UsparentComponent;
  let fixture: ComponentFixture<UsparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
