import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
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

  ngOnInit() {
    // this.initiateLocalVariable();
  }

  initiateLocalVariable() {
    let triggerUpdate = false;
    if (this.buildJSON) {
      if (this.buildJSON.rows instanceof Array) {
        this.rowCount = this.buildJSON.rows.length;
      } else {
        this.buildJSON.rows = [""];
        this.rowCount = 1;
        triggerUpdate = true;
      }
      if (this.buildJSON.columns instanceof Array) {
        this.columnCount = this.buildJSON.columns.length;
      } else {
        this.buildJSON.columns = [""];
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
    const currentColumn = this.buildJSON.columns.length;
    if (currentColumn > this.columnCount) {
      this.buildJSON.columns.splice(
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
        this.buildJSON.columns.push("");
      }
      triggerUpdate = true;
    }

    const currentRow = this.buildJSON.rows.length;
    if (currentRow > this.rowCount) {
      this.buildJSON.rows.splice(this.rowCount, currentRow - this.rowCount);
      triggerUpdate = true;
    } else {
      for (
        let columnIndex = currentRow;
        columnIndex < this.rowCount;
        columnIndex++
      ) {
        this.buildJSON.rows.push("");
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
