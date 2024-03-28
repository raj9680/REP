import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTypesComponent } from './listing-types.component';

describe('ListingTypesComponent', () => {
  let component: ListingTypesComponent;
  let fixture: ComponentFixture<ListingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
