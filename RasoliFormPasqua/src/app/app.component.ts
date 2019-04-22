import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
import {User} from './user'
import {DefUsr} from './defaultuser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RasoliFormPasqua';
  loggedIn : Boolean;
  sUser : Boolean;
  logForm : FormGroup;
  sUsr: Boolean;
  DefUser: User[];
  constructor(fb: FormBuilder)
  {
    this.loggedIn = false;
    this.sUser = false;
    this.DefUser = DefUsr;

    this.logForm = fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    })
  }
  chkCreds()
  {
    for(let a of this.DefUser)
    {
      if(a.username == this.logForm.controls['username'].value && a.password == this.logForm.controls['password'].value)
      {
        this.loggedIn = true;
        this.sUsr = Boolean(a.superuser);
        console.log("logged in");
      }
    }
  }
}
