import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresPage } from './postres.page';

describe('PostresPage', () => {
  let component: PostresPage;
  let fixture: ComponentFixture<PostresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
