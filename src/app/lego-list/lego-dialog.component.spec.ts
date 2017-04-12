import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoDialogComponent } from './lego-dialog.component';

describe('LegoDialogComponent', () => {
  let component: LegoDialogComponent;
  let fixture: ComponentFixture<LegoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
