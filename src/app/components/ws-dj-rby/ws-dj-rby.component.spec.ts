import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsDjRbyComponent } from './ws-dj-rby.component';

describe('WsDjRbyComponent', () => {
  let component: WsDjRbyComponent;
  let fixture: ComponentFixture<WsDjRbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsDjRbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsDjRbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
