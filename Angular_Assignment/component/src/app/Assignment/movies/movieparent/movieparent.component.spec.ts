import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieparentComponent } from './movieparent.component';

describe('MovieparentComponent', () => {
  let component: MovieparentComponent;
  let fixture: ComponentFixture<MovieparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
