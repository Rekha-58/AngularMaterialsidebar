import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersbodyComponent } from './weathersbody.component';

describe('WeathersbodyComponent', () => {
  let component: WeathersbodyComponent;
  let fixture: ComponentFixture<WeathersbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeathersbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeathersbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
