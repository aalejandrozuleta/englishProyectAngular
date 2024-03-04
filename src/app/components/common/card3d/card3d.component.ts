import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card3d',
  templateUrl: './card3d.component.html',
  styleUrls: ['./card3d.component.scss'],
})
export class Card3dComponent {
  @Input() infoCard = {
    frontImage :'',   
    backText:''  
  };
  isFlipped: boolean = false;

  

  handleCardFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
}
