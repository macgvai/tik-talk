import {Component, effect, inject, OnDestroy, signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {single, Subscription} from 'rxjs';
import {NgClass} from '@angular/common';
import {SvgImgComponent} from '../../common-ui/svg-img/svg-img.component';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgClass,
        SvgImgComponent
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnDestroy {
    constructor() {
        effect(() => {
            console.log(`showPassword: ${this.showPassword()}`);
        });
    }

    fb = inject(FormBuilder);
    authService = inject(AuthService)
    router = inject(Router)
    login$!: Subscription
    showPassword = signal(false)

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

    buttonClick(event: MouseEvent) {
        debugger
        event.preventDefault()
        this.showPassword.set(!this.showPassword())
    }

    ngOnDestroy(): void {
        this.login$.unsubscribe();
    }
}
