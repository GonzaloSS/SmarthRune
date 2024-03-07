import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRosharCalendarComponent } from './list-roshar-calendar.component';

describe('ListRosharCalendarComponent', () => {
  let component: ListRosharCalendarComponent;
  let fixture: ComponentFixture<ListRosharCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRosharCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRosharCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
