import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BradpanComponent } from './bradpan.component';

describe('BradpanComponent', () => {
  let component: BradpanComponent;
  let fixture: ComponentFixture<BradpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BradpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BradpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
