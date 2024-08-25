import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms"

export class LoginPageForm {
  private formBuilder: FormBuilder;  // Declare 'formBuilder' as a property

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;  // Initialize 'formBuilder' in the constructor
  }

  createForm(): FormGroup {
    return this.formBuilder.group({  // Now 'formBuilder' is recognized
      // Define your form controls here
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}

