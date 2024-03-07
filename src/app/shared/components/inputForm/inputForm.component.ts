import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputForm',
  templateUrl: './inputForm.component.html',
  styleUrls: ['./inputForm.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Input() inputType: string = '';
  @Input() placeholderText: string = '';
  @Input() mensageError: string = '';

  constructor() {}

  ngOnInit() {}
}
