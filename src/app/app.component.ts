import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "JSONTemplate";
  templates: any[] = [
    {
      type: "section",
      header: "Liver",
      description: "Some Description"
    }
  ];

  dragMode = false;

  addSection() {
    this.templates.push({
      type: "section",
      header: "Title",
      description: "Some Description"
    });
  }

  addStatement() {
    this.templates.push({
      type: "statement",
      header: "Statement",
      description: "Some Description"
    });
  }

  addTable() {
    this.templates.push({
      type: "table",
      header: "Statement",
      description: "Some Description"
    });
  }

  deleteTemplate(event: Event, index: number) {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log(event);
    this.templates.splice(index, 1);
  }

  dragStart(event: DragEvent, index: number) {
    console.log(event);
    const ctx = event.srcElement.cloneNode(true);
    // event.dataTransfer.setDragImage(<any>ctx, 0, 0);
    event.dataTransfer.setData("templateId", "" + index);
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event) {
    // ev.preventDefault();
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
  }
}
