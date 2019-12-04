import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparentComponent } from './comparent.component';

describe('ComparentComponent', () => {
  let component: ComparentComponent;
  let fixture: ComponentFixture<ComparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
