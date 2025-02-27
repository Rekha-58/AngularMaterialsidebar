import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegalleryComponent } from './imagegallery.component';

describe('ImagegalleryComponent', () => {
  let component: ImagegalleryComponent;
  let fixture: ComponentFixture<ImagegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagegalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
