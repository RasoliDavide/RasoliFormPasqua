export class Prenotazione
{
    constructor(n: String, cn: String, oi: String, ofn: String, d : String, m : String, nt: String, dom: String, p : String)
    {
        this.nome = n;
        this.cognome = cn;
        this.oraInizio = oi;
        this.oraFine = ofn;
        this.data = d;
        this.email = m;
        this.nTel = nt;
        this.domicilio = dom;
        this.problema = p;
    }

    nome: String;
    cognome: String;
    oraInizio: String;
    oraFine: String;
    data: String;
    email: String;
    nTel: String;
    domicilio: String;
    problema: String;
}