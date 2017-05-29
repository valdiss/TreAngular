import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptylocalstorageComponent } from './emptylocalstorage.component';

describe('EmptylocalstorageComponent', () => {
  let component: EmptylocalstorageComponent;
  let fixture: ComponentFixture<EmptylocalstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptylocalstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptylocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
