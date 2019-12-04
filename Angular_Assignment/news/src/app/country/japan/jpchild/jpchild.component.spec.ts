import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpchildComponent } from './jpchild.component';

describe('JpchildComponent', () => {
  let component: JpchildComponent;
  let fixture: ComponentFixture<JpchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
