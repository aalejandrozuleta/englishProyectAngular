import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent {
  isOpen = false;

  optionsUser = [
    {
      path: '/singUp',
      name: 'Registrarte',
    },
    {
      path: '/login',
      name: 'Iniciar sesión',
    },
  ];

  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
