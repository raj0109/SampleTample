import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-statement",
  templateUrl: "./statement.component.html",
  styleUrls: ["./statement.component.css"]
})
export class StatementComponent {
  statementName;
  statementDescription;
  @Input()
  get name() {
    return this.statementName;
  }

  set name(value) {
    this.statementName = value;
  }

  @Input()
  get description() {
    return this.statementDescription;
  }

  set description(value) {
    this.statementDescription = value;
  }

  @Output() nameChange = new EventEmitter();
  @Output() descriptionChange = new EventEmitter();

  updateName() {
    this.nameChange.emit(this.statementName);
  }

  updateDescription() {
    this.descriptionChange.emit(this.statementDescription);
  }
}
