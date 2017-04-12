import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoListComponent } from './lego-list.component';

describe('LegoListComponent', () => {
  let component: LegoListComponent;
  let fixture: ComponentFixture<LegoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
