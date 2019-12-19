import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRequestedBooksComponent } from './display-requested-books.component';

describe('DisplayRequestedBooksComponent', () => {
  let component: DisplayRequestedBooksComponent;
  let fixture: ComponentFixture<DisplayRequestedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRequestedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRequestedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
