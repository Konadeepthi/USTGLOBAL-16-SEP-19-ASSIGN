import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComchildComponent } from './comchild.component';

describe('ComchildComponent', () => {
  let component: ComchildComponent;
  let fixture: ComponentFixture<ComchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
