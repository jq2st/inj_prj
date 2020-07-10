import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Admin } from '../shared/interfaces/interfaces';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {

  fail: boolean = false
  form: FormGroup

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('') 
    })
  }

  checkAdmin() {
    const admin: Admin = {
      email: this.form.value.login,
      password: this.form.value.password
    }
    
    this.auth.login(admin)
      .subscribe(n => {
        this.form.reset()
        this.router.navigate(['admin', 'dashboard'])
      })
  }

}
