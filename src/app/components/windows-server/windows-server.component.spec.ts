import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsServerComponent } from './windows-server.component';

describe('WindowsServerComponent', () => {
  let component: WindowsServerComponent;
  let fixture: ComponentFixture<WindowsServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
