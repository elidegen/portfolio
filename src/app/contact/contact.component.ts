import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('popUp') popUpDiv: any;
  @ViewChild('nameInput') nameInput: any;
  @ViewChild('emailInput') emailInput: any;
  @ViewChild('msgInput') msgInput: any;

  notification: string = 'Your message could not be sent!';
  imgUrl: string = 'cross';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
    checkBoxInput: new FormControl('', [Validators.requiredTrue])
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

  onFormSubmit(event: Event) {
    this.sendMail(event);
  }

  sendMail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xwkdayqg", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      this.notification = 'Your message has been sent!';
      this.imgUrl = 'tick';

    }).catch(() => {
      this.notification = 'Your message could not be sent!';
      this.imgUrl = 'cross';
    });
    setTimeout(() => {
      this.popUpDiv.nativeElement.classList.add('notification');
    }, 1000);
    this.popUpDiv.nativeElement.classList.remove('notification');

    // this.clearForm();
  }

  clearForm() {
    this.nameInput.nativeElement.setValue('');
    this.emailInput.nativeElement.setValue('');
    this.msgInput.nativeElement.setValue('');
  }
}