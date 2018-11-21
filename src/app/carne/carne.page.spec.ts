import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnePage } from './carne.page';

describe('CarnePage', () => {
  let component: CarnePage;
  let fixture: ComponentFixture<CarnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
