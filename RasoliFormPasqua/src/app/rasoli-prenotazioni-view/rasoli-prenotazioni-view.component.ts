import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazioni';

@Component({
  selector: 'app-rasoli-prenotazioni-view',
  templateUrl: './rasoli-prenotazioni-view.component.html',
  styleUrls: ['./rasoli-prenotazioni-view.component.css']
})
export class RasoliPrenotazioniViewComponent implements OnInit {
  @Input() prenSel : Prenotazione;
  constructor() { }

  ngOnInit() {
  }

}
