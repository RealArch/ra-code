import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailerService } from 'src/app/services/mailer/mailer.service';
import { GeneralSnackbarComponent } from '../../generalComponents/general-snackbar/general-snackbar.component';
import { PopupsService } from 'src/app/services/popups/popups.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  background = '/assets/images/contact_background_ra-code.webp'
  breadcrumb = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Contacto',
      link: '/contact'
    }
  ]
  sending: boolean = false
  contactForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private apiMailer: MailerService,
    private popups: PopupsService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],

    })
  }
  ngOnInit() {

  }
  sendMail(form: any) {
    this.sending = true;
    this.apiMailer.sendMail(form.name, form.lastname, form.email, form.phone, form.description)
      .then(() => {
        this.popups.okDialog('¡Muy bien!', 'Mensaje enviado con éxito. Revisaremos tu solicitud y la responderemos lo más pronto posible.')
        this.contactForm.reset()
      }).catch(err => {
        console.log(err)
        this.popups.showSnackBar('snackDanger', 'Ocurrió un problema al enviar el mensaje. Por favor intenta nuevamente.')
      }).finally(() => {
        this.sending = false;
      })
  }

}
