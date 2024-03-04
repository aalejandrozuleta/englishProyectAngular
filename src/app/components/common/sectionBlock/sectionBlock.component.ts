import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectionBlock',
  templateUrl: './sectionBlock.component.html',
  styleUrls: ['./sectionBlock.component.scss']
})
export class SectionBlockComponent {
  @Input() imgBlockSection: string = '';
  @Input() title: string = '';
  @Input() paragraph: string = '';
}
