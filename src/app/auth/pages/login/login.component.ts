import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['cristian@gmail.com', [Validators.required, Validators.email]],
    password: ['ADM-21011', [Validators.required, Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  login() {
    // console.log(this.miFormulario.valid);
    // this.router.navigateByUrl('/inicio');

    console.log(this.miFormulario.value);

    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password)
      .subscribe(res => {
        if (res === false) {
          this.router.navigateByUrl('/inicio');
        } else {
          Swal.fire('error', res, 'error');
        }
      });
  }
}
