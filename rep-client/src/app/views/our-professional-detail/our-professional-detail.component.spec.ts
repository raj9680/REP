import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfessionalDetailComponent } from './our-professional-detail.component';

describe('OurProfessionalDetailComponent', () => {
  let component: OurProfessionalDetailComponent;
  let fixture: ComponentFixture<OurProfessionalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProfessionalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProfessionalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
