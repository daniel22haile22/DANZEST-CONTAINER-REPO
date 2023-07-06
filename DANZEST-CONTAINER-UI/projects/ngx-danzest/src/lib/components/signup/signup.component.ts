import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/auth-users-service/signup.service';
import { ISignup } from '../../models/auth-models/signup.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  public signupForm!: FormGroup;
  public dzID: string = '';
  public success_message: string = '';
  private subscription: Subscription = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['user', Validators.required],
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      this.signupService.registerUser(userData).subscribe(
        {
          next: (response) => {
            console.log('Signup successful:', response);
            this.success_message = response.message;
            this.dzID = response.dzID; // Store the dzID in the component property
          },
          error: (err) => console.log('Signup failed:', err),
        }
      );
    } else {
      // Handle form validation errors
      this.signupForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    if (!this.subscription) {
      return;
    } else {
      this.subscription.unsubscribe();
    }
  }
}
