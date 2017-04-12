import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoItemComponent } from './lego-item.component';

describe('LegoItemComponent', () => {
  let component: LegoItemComponent;
  let fixture: ComponentFixture<LegoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
