import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statement-builder',
  templateUrl: './statement-builder.component.html',
  styleUrls: ['./statement-builder.component.css']
})
export class StatementBuilderComponent {
  @Input()
  buildJSON;
}
