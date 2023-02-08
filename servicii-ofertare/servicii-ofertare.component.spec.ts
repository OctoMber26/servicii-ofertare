import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiOfertareComponent } from './servicii-ofertare.component';

describe('ServiciiOfertareComponent', () => {
  let component: ServiciiOfertareComponent;
  let fixture: ComponentFixture<ServiciiOfertareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciiOfertareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciiOfertareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
