import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsasPage } from './salsas.page';

describe('SalsasPage', () => {
  let component: SalsasPage;
  let fixture: ComponentFixture<SalsasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalsasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
