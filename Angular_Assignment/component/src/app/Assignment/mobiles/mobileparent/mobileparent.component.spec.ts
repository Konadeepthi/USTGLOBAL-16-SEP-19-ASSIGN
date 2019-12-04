import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileparentComponent } from './mobileparent.component';

describe('MobileparentComponent', () => {
  let component: MobileparentComponent;
  let fixture: ComponentFixture<MobileparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
