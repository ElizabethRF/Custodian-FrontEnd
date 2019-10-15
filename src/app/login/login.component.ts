import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public router: Router, private fb: FormBuilder, private service: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const success = this.service.login(email, password);
    if (success) {
      this.router.navigateByUrl('/notifications');
    }
  }
}
