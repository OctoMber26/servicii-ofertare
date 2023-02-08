import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugareServiciuComponent } from './adaugare-serviciu.component';

describe('AdaugareServiciuComponent', () => {
  let component: AdaugareServiciuComponent;
  let fixture: ComponentFixture<AdaugareServiciuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugareServiciuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaugareServiciuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
