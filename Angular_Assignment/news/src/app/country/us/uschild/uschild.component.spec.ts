import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UschildComponent } from './uschild.component';

describe('UschildComponent', () => {
  let component: UschildComponent;
  let fixture: ComponentFixture<UschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
