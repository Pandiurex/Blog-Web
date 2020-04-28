import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsDjRbyComponent } from './ls-dj-rby.component';

describe('LsDjRbyComponent', () => {
  let component: LsDjRbyComponent;
  let fixture: ComponentFixture<LsDjRbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsDjRbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsDjRbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
