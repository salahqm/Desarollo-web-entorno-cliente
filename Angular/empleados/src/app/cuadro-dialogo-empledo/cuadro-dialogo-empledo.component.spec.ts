import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoEmpledoComponent } from './cuadro-dialogo-empledo.component';

describe('CuadroDialogoEmpledoComponent', () => {
  let component: CuadroDialogoEmpledoComponent;
  let fixture: ComponentFixture<CuadroDialogoEmpledoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoEmpledoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoEmpledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
