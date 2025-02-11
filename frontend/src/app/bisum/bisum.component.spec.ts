import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisumComponent } from './bisum.component';

describe('BisumComponent', () => {
  let component: BisumComponent;
  let fixture: ComponentFixture<BisumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BisumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
