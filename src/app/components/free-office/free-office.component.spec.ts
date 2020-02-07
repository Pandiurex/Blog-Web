import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeOfficeComponent } from './free-office.component';

describe('FreeOfficeComponent', () => {
  let component: FreeOfficeComponent;
  let fixture: ComponentFixture<FreeOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
