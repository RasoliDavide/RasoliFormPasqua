import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Prenotazione} from '../prenotazioni';
@Component({
  selector: 'app-rasoli-prenotazioni',
  templateUrl: './rasoli-prenotazioni.component.html',
  styleUrls: ['./rasoli-prenotazioni.component.css']
})
export class RasoliPrenotazioniComponent implements OnInit {

  pren: Boolean;
  nuovaPrenotazione: FormGroup;
  aprtext:String;
  prenotazioni: Prenotazione[];

  constructor(fb: FormBuilder) { 
    this.pren = false;
    this.aprtext = "Prenota intervento";
    this.nuovaPrenotazione = fb.group(
      {
        'nome' : ['', Validators.required],
        'cognome' : ['', Validators.required],
        'oraInizio' : ['', Validators.required],
        'oraFine': ['', Validators.required],
        'data':  ['', Validators.required],
        'email': ['', Validators.email],
        'nTel' : ['', Validators.required],
        'domicilio' : ['', Validators.required],
        'problema' : ['', Validators.required]
      }
    )
  }

  ngOnInit() {
  }
  prenotazione()
  {
    console.log("triggered");
    if(this.nuovaPrenotazione.valid)
    {
      console.log(this.nuovaPrenotazione.controls['nome'].value);
      console.log(this.nuovaPrenotazione.controls['cognome'].value);
      console.log(this.nuovaPrenotazione.controls['oraInizio'].value);
      console.log(this.nuovaPrenotazione.controls['oraFine'].value);
      console.log(this.nuovaPrenotazione.controls['data'].value);
      console.log(this.nuovaPrenotazione.controls['email'].value);
      console.log(this.nuovaPrenotazione.controls['nTel'].value);
      console.log(this.nuovaPrenotazione.controls['domicilio'].value);
      console.log(this.nuovaPrenotazione.controls['problema'].value);
    }
  }
  triggerForm()
  {
    this.pren = !this.pren;
    if(this.pren)
    {
      this.aprtext = "Annulla";
    }
    else
    {
      this.aprtext = "Prenota intervento";
    }
  }
}
