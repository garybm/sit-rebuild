import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosialComponent } from './sosial.component';

describe('SosialComponent', () => {
  let component: SosialComponent;
  let fixture: ComponentFixture<SosialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
