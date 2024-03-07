import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Input() formAction: string = '';
  @Input() formMethod: string = '';
  @Input() formImg: string = '';
  @Input() buttonText: string = '';
  @Input() dataInputs: { inputType: string, placeholderText: string }[] = [];

  constructor() {}

  onSubmit() {
    console.log('Datos del formulario:');
  }

  ngOnInit() {
  }
}
