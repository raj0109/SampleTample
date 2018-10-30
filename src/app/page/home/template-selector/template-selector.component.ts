import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.css']
})
export class TemplateSelectorComponent {
  template;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() 
  get value() {
    return this.template;
  }

  set value(value) {
    this.template = value;
  }

  updateTemplate(value) {
    this.template = value;
    this.valueChange.emit(this.template);
  }
}
