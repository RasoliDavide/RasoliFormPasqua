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
  logForm : FormGroup;
  DefUser: User[];
  loggedUser: User;
  constructor(fb: FormBuilder)
  {
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
        this.loggedUser = a;
        console.log("logged in");
      }
    }
  }
}
