import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparentComponent } from './bikeparent.component';

describe('BikeparentComponent', () => {
  let component: BikeparentComponent;
  let fixture: ComponentFixture<BikeparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
