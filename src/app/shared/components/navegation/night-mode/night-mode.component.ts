import { Component } from '@angular/core';

@Component({
  selector: 'app-night-mode',
  templateUrl: './night-mode.component.html',
  styleUrl: './night-mode.component.scss'
})
export class NightModeComponent {
  isNightMode = false;

  toggleMode() {
    this.isNightMode = !this.isNightMode;

    if (this.isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }
}
