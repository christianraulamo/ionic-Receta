import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvesPage } from './aves.page';

describe('AvesPage', () => {
  let component: AvesPage;
  let fixture: ComponentFixture<AvesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
