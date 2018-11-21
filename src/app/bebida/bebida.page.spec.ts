import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaPage } from './bebida.page';

describe('BebidaPage', () => {
  let component: BebidaPage;
  let fixture: ComponentFixture<BebidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
