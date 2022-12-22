import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTakeOffComponent } from './rocket-take-off.component';

describe('RocketTakeOffComponent', () => {
  let component: RocketTakeOffComponent;
  let fixture: ComponentFixture<RocketTakeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketTakeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketTakeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
