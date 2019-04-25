import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasoliPrenotazioniViewComponent } from './rasoli-prenotazioni-view.component';

describe('RasoliPrenotazioniViewComponent', () => {
  let component: RasoliPrenotazioniViewComponent;
  let fixture: ComponentFixture<RasoliPrenotazioniViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasoliPrenotazioniViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasoliPrenotazioniViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
