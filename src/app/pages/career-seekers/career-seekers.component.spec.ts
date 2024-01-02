import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSeekersComponent } from './career-seekers.component';

describe('CareerSeekersComponent', () => {
  let component: CareerSeekersComponent;
  let fixture: ComponentFixture<CareerSeekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerSeekersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
