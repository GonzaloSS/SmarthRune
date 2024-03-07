import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRosharCalendarComponent } from './create-roshar-calendar.component';

describe('CreateRosharCalendarComponent', () => {
  let component: CreateRosharCalendarComponent;
  let fixture: ComponentFixture<CreateRosharCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRosharCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRosharCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
