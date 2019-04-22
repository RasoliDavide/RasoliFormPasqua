import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasoliPrenotazioniComponent } from './rasoli-prenotazioni.component';

describe('RasoliPrenotazioniComponent', () => {
  let component: RasoliPrenotazioniComponent;
  let fixture: ComponentFixture<RasoliPrenotazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasoliPrenotazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasoliPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
