import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaModalPage } from './tarefa-modal.page';

describe('TarefaModalPage', () => {
  let component: TarefaModalPage;
  let fixture: ComponentFixture<TarefaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
