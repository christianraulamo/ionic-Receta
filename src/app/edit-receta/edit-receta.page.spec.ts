import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecetaPage } from './edit-receta.page';

describe('EditRecetaPage', () => {
  let component: EditRecetaPage;
  let fixture: ComponentFixture<EditRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
