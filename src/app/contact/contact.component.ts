import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendMail(event: Event) {
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