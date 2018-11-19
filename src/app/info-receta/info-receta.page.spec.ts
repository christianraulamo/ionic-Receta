import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecetaPage } from './info-receta.page';

describe('InfoRecetaPage', () => {
  let component: InfoRecetaPage;
  let fixture: ComponentFixture<InfoRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRecetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
