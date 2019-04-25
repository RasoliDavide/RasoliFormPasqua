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
  prenSel : Prenotazione;
  constructor(fb: FormBuilder) { 
    this.pren = false;
    this.aprtext = "Prenota intervento";
    this.prenotazioni = Array<Prenotazione>();
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
      this.prenotazioni.push(new Prenotazione(this.nuovaPrenotazione.controls['nome'].value, this.nuovaPrenotazione.controls['cognome'].value,
      this.nuovaPrenotazione.controls['oraInizio'].value, this.nuovaPrenotazione.controls['oraFine'].value,
      this.nuovaPrenotazione.controls['data'].value, this.nuovaPrenotazione.controls['email'].value,
      this.nuovaPrenotazione.controls['nTel'].value,this.nuovaPrenotazione.controls['domicilio'].value,
      this.nuovaPrenotazione.controls['problema'].value));
    }
  }
  onSelect(ps:Prenotazione)
  {
    console.log("sel");
    this.prenSel = ps;
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
