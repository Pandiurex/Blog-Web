import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSoftComponent } from './drop-soft.component';

describe('DropSoftComponent', () => {
  let component: DropSoftComponent;
  let fixture: ComponentFixture<DropSoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropSoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
