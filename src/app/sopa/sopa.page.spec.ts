import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaPage } from './sopa.page';

describe('SopaPage', () => {
  let component: SopaPage;
  let fixture: ComponentFixture<SopaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
