import { Component, OnInit } from '@angular/core';
import { ContactoUser } from '../models/contacto-user';

// Decorador
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  pattern = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-\.]+$/;
  public usuario: ContactoUser;

  constructor() {
    // Campos vacios para rellenar con el formulalrio
    this.usuario = new ContactoUser('', '', '', '');
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.usuario);
    if (this.usuario.email === '' || this.usuario.email !== '/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-\.]+$/') {
      alert('NO ES CORREO VALIDO');
    } else {
      alert('SI ES CORREO VALIDO');
    }
  }
}
