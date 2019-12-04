import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpparentComponent } from './jpparent.component';

describe('JpparentComponent', () => {
  let component: JpparentComponent;
  let fixture: ComponentFixture<JpparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
