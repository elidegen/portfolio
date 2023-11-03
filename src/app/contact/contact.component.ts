import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  isValid(input: any) {
    const control = this.contactForm.get(input);
    return control && control.valid;
  }

  isInvalid(input: any) {
    const control = this.contactForm.get(input);
    return control && control.invalid && control.touched;
  }


  sendMail(event: Event) {
    console.warn(event);

    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    console.log('formadata created');

    fetch("https://formspree.io/f/xwkdayqg", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      console.log('successfully send');

    }).catch((error) => {
      console.log(error);
    });
  }

  onFormSubmit(event: Event) {
    this.sendMail(event);
  }
}