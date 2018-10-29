import { Component, Input } from "@angular/core";

@Component({
  selector: "app-statement",
  templateUrl: "./statement.component.html",
  styleUrls: ["./statement.component.css"]
})
export class StatementComponent {
  @Input()
  buildJSON;
}
