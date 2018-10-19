import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "JSONTemplate";
  templates: any[] = [];

  dragMode = false;

  addSection() {
    this.templates.push(this.getNewTemplate("Section"));
  }

  addStatement() {
    this.templates.push(this.getNewTemplate("Statement"));
  }

  addTable() {
    this.templates.push(this.getNewTemplate("Table"));
  }

  deleteTemplate(event: Event, index: number) {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log(event);
    this.templates.splice(index, 1);
  }

  dragStart(event: DragEvent, dragItem: string) {
    event.dataTransfer.setData("templateName", dragItem);
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  getNewTemplate(type) {
    switch (type) {
      case "Section":
        return {
          name: "Liver",
          type: "section",
          items: [
            {
              name: "",
              stateoptions: [],
              visible: true
            }
          ]
        };
      case "Table":
        return {
          type: "table",
          rows: [""],
          columns: [""],
          name: ""
        };
      case "Statement":
        return {
          type: "statement",
          name: "",
          description: "Some Description"
        };
    }
  }

  handleDrop(event, index) {
    const newTemplate = this.getNewTemplate(
      event.dataTransfer.getData("templateName")
    );
    this.templates.splice(index, 0, newTemplate);
  }

  handleSave() {
    console.log(this.templates);
  }
}
