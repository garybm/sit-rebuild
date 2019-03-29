import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoseHomeComponent } from './bose-home.component';

describe('BoseHomeComponent', () => {
  let component: BoseHomeComponent;
  let fixture: ComponentFixture<BoseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
