import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { RasoliPrenotazioniComponent } from './rasoli-prenotazioni/rasoli-prenotazioni.component';
import { RasoliPrenotazioniViewComponent } from './rasoli-prenotazioni-view/rasoli-prenotazioni-view.component';


@NgModule({
  declarations: [
    AppComponent,
    RasoliPrenotazioniComponent,
    RasoliPrenotazioniViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
