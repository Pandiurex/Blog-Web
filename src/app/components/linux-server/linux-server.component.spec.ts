import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxServerComponent } from './linux-server.component';

describe('LinuxServerComponent', () => {
  let component: LinuxServerComponent;
  let fixture: ComponentFixture<LinuxServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
