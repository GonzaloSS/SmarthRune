import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLevelComponent } from './my-level.component';

describe('MyLevelComponent', () => {
  let component: MyLevelComponent;
  let fixture: ComponentFixture<MyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
