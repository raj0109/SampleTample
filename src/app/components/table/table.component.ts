import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  rowCount = 1;
  columnCount = 1;
  buildJSON;

  @Input()
  get value() {
    return this.buildJSON;
  }

  set value(val) {
    this.buildJSON = val;
    this.initiateLocalVariable();
  }

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();


  initiateLocalVariable() {
    let triggerUpdate = false;
    if (this.buildJSON) {
      if (this.buildJSON.items instanceof Array) {
        this.rowCount = this.buildJSON.items.length;
      } else {
        this.buildJSON.items = [[]];
        this.rowCount = 1;
        triggerUpdate = true;
      }
      if (this.buildJSON.heading instanceof Array) {
        this.columnCount = this.buildJSON.heading.length;
      } else {
        this.buildJSON.heading = [""];
        this.columnCount = 1;
        triggerUpdate = true;
      }
    }
    if (triggerUpdate) {
      this.valueChange.emit(this.buildJSON);
    }
  }

  updateTable() {
    let triggerUpdate = false;
    const currentColumn = this.buildJSON.heading.length;
    if (currentColumn > this.columnCount) {
      this.buildJSON.heading.splice(
        this.columnCount,
        currentColumn - this.columnCount
      );
      triggerUpdate = true;
    } else {
      for (
        let columnIndex = currentColumn;
        columnIndex < this.columnCount;
        columnIndex++
      ) {
        this.buildJSON.heading.push("");
      }
      triggerUpdate = true;
    }

    const currentRow = this.buildJSON.items.length;
    if (currentRow > this.rowCount) {
      this.buildJSON.items.splice(this.rowCount, currentRow - this.rowCount);
      triggerUpdate = true;
    } else {
      for (
        let columnIndex = currentRow;
        columnIndex < this.rowCount;
        columnIndex++
      ) {
        this.buildJSON.items.push([]);
      }
      triggerUpdate = true;
    }

    if (triggerUpdate) {
      this.valueChange.emit(this.buildJSON);
    }
  }

  trackByIndex(index) {
    return index;
  }
}
