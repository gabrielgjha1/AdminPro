import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopaginaComponent } from './nopagina.component';

describe('NopaginaComponent', () => {
  let component: NopaginaComponent;
  let fixture: ComponentFixture<NopaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
