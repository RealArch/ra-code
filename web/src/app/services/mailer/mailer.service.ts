import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getFirestore, setDoc } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(
    private _firestore: Firestore,
  ) { }
  sendMail(name: string, lastname:string, email: string, phone: string, message: string) {
    var ref = collection(getFirestore(), 'mail')
    return addDoc(ref, {
      to: environment.mailer,
      replyTo: email,
      message: {
        subject: 'Formulario Ra-code',
        html: `
        <strong>Nombre:</strong> ${name} <br>
        <strong>Nombre:</strong> ${lastname} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone}<br><br>
        <strong>Mensaje:</strong> "${message}"
        `        
      },
    })
  }
}
