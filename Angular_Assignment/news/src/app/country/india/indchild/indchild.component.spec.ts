import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndchildComponent } from './indchild.component';

describe('IndchildComponent', () => {
  let component: IndchildComponent;
  let fixture: ComponentFixture<IndchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
