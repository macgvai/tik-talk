import {Component, inject, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnDestroy{
  fb = inject(FormBuilder);
  authService = inject(AuthService)
  router = inject(Router)
  login$!: Subscription

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.login$ = this.authService.login(this.form.value).subscribe(
        res => {
          this.router.navigate([''])
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.login$.unsubscribe();
  }
}
