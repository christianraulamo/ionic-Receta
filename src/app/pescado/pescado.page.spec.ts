import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PescadoPage } from './pescado.page';

describe('PescadoPage', () => {
  let component: PescadoPage;
  let fixture: ComponentFixture<PescadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PescadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PescadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
