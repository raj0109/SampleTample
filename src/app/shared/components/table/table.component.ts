import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  rowCount = 1;
  columnCount = 1;
  @Input()
  buildJSON;
  constructor() {}

  ngOnInit() {
    this.initiateLocalVariable();
  }

  initiateLocalVariable() {
    if (this.buildJSON) {
      if (this.buildJSON.rows instanceof Array) {
        this.rowCount = this.buildJSON.rows.length;
      } else {
        this.buildJSON.rows = [""];
        this.rowCount = 1;
      }
      if (this.buildJSON.columns instanceof Array) {
        this.columnCount = this.buildJSON.columns.length;
      } else {
        this.buildJSON.columns = [""];
        this.columnCount = 1;
      }
    }
  }

  updateTable() {
    const currentColumn = this.buildJSON.columns.length;
    if (currentColumn > this.columnCount) {
      this.buildJSON.columns.splice(
        this.columnCount,
        currentColumn - this.columnCount
      );
    } else {
      for (
        let columnIndex = currentColumn;
        columnIndex < this.columnCount;
        columnIndex++
      ) {
        this.buildJSON.columns.push("");
      }
    }

    const currentRow = this.buildJSON.rows.length;
    if (currentRow > this.rowCount) {
      this.buildJSON.rows.splice(this.rowCount, currentRow - this.rowCount);
    } else {
      for (
        let columnIndex = currentRow;
        columnIndex < this.rowCount;
        columnIndex++
      ) {
        this.buildJSON.rows.push("");
      }
    }
  }

  trackByIndex(index) {
    return index;
  }
}
