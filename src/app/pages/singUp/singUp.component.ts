import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singUp',
  templateUrl: './singUp.component.html',
  styleUrls: ['./singUp.component.scss']
})
export class SingUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataInputs = [
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
