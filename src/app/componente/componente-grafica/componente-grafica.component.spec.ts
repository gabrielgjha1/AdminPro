import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGraficaComponent } from './componente-grafica.component';

describe('ComponenteGraficaComponent', () => {
  let component: ComponenteGraficaComponent;
  let fixture: ComponentFixture<ComponenteGraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteGraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
