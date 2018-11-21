import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetalesPage } from './vegetales.page';

describe('VegetalesPage', () => {
  let component: VegetalesPage;
  let fixture: ComponentFixture<VegetalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
