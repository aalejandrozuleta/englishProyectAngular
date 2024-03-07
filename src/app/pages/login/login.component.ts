import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataInputs = [
    {
      inputType: "text",
      placeholderText: "Nombre"
    },
    {
      inputType: "text",
      placeholderText: "Apellido"
    },
    {
      inputType: "email",
      placeholderText: "Correo"
    },
    {
      inputType: "password",
      placeholderText: "Contraseña"
    }
  ]

}
