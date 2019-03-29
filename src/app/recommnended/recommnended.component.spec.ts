import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommnendedComponent } from './recommnended.component';

describe('RecommnendedComponent', () => {
  let component: RecommnendedComponent;
  let fixture: ComponentFixture<RecommnendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommnendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommnendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
