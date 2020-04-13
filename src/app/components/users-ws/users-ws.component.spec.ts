import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWSComponent } from './users-ws.component';

describe('UsersWSComponent', () => {
  let component: UsersWSComponent;
  let fixture: ComponentFixture<UsersWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
