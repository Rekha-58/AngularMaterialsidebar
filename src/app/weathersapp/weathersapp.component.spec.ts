import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersappComponent } from './weathersapp.component';

describe('WeathersappComponent', () => {
  let component: WeathersappComponent;
  let fixture: ComponentFixture<WeathersappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeathersappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeathersappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
