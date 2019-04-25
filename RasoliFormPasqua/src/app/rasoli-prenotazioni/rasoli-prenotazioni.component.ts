import { Component, OnInit, Input } from '@angular/core';
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
  err : Boolean;
  oraInizioErr: Boolean;
  oraFineErr: Boolean;
  inverted : Boolean;
  @Input() su : Boolean;
  constructor(fb: FormBuilder) { 
    this.pren = false;
    this.aprtext = "Prenota intervento";
    this.prenotazioni = Array<Prenotazione>();
    this.err = false;
    this.oraInizioErr = false;
    this.oraFineErr = false;
    this.inverted = false;
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
    this.err = false;
    this.oraInizioErr = false;
    this.oraFineErr = false;
    this.inverted = false;
    console.log("Prenotazione avviata");
    if(this.nuovaPrenotazione.valid)
    {
      /*console.log(this.nuovaPrenotazione.controls['nome'].value);
      console.log(this.nuovaPrenotazione.controls['cognome'].value);
      console.log(this.nuovaPrenotazione.controls['oraInizio'].value);
      console.log(this.nuovaPrenotazione.controls['oraFine'].value);
      console.log(this.nuovaPrenotazione.controls['data'].value);
      console.log(this.nuovaPrenotazione.controls['email'].value);
      console.log(this.nuovaPrenotazione.controls['nTel'].value);
      console.log(this.nuovaPrenotazione.controls['domicilio'].value);
      console.log(this.nuovaPrenotazione.controls['problema'].value);*/
      var orIN = this.strToNumber(this.nuovaPrenotazione.controls['oraInizio'].value);
      var orOUT = this.strToNumber(this.nuovaPrenotazione.controls['oraFine'].value);
      this.inverted = orIN > orOUT;
      var hrOK = !this.inverted;
      if(this.prenotazioni.length > 0)
      {
        for(let pr of this.prenotazioni)
        {
          if(pr.data == this.nuovaPrenotazione.controls['data'].value)
          {
            console.log("Il controllo della data triggera il controllo dell'ora")
            console.log(pr.oraInizio);
            console.log(pr.oraFine);
            console.log(orIN);
            console.log(orOUT);
            if(this.checkHRS(this.strToNumber(pr.oraInizio), this.strToNumber(pr.oraFine), orIN, orOUT))
            {
              console.log("HRS Check triggered");
              hrOK = false;
            }
          }
          
        }
      }
      
      if(hrOK)
      {
        this.prenotazioni.push(new Prenotazione(this.nuovaPrenotazione.controls['nome'].value, this.nuovaPrenotazione.controls['cognome'].value,
        this.nuovaPrenotazione.controls['oraInizio'].value, this.nuovaPrenotazione.controls['oraFine'].value,
        this.nuovaPrenotazione.controls['data'].value, this.nuovaPrenotazione.controls['email'].value,
        this.nuovaPrenotazione.controls['nTel'].value,this.nuovaPrenotazione.controls['domicilio'].value,
        this.nuovaPrenotazione.controls['problema'].value));
        this.triggerForm();
        this.nuovaPrenotazione.reset({nome : '', cognome: '', oraInizio:'', oraFine: '', data:'', email: '', nTel:'', domicilio : '', problema: ''});
        console.log("Prenotazione ok");
        this.err = false;
        this.oraInizioErr = false;
        this.oraFineErr = false;
        this.inverted = false;
      }
    }
  }
  checkHRS(orInizioV: Number, orFineV: Number, orInizioN : Number, orFineN):Boolean
  {
    this.oraInizioErr = (orInizioN > orInizioV) && (orInizioN < orFineV); // Se l'ora inizio nuova è maggiore di ora inizio vecchia e minore di ora fine vecchia va in errore

    this.oraFineErr = (orFineN > orInizioV) && (orFineN < orFineV);
    this.err = (orInizioN < orInizioV) && (orFineN > orFineV);
    return this.oraInizioErr || this.oraFineErr || this.err;
  }
  strToNumber(str : String):Number
  {
    var inputSTR = String(str).replace(":", ".");
    return Number(inputSTR);
  }
  onSelect(ps:Prenotazione)
  {
    console.log("Selezionato");
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
