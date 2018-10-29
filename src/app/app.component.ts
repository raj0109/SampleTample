import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "JSONTemplate";
  templates: any[] = [];
  name;
  description;

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
    const template = {recom: null};
    switch (type) {
      case "Section":
      template['recom'] = {
          name: "",
          type: "section",
          items: [
            {
              name: "",
              stateoptions: [],
              visible: true
            }
          ]
        };
        return template;
      case "Table":
      template['recom'] = {
          type: "table",
          items: [
            [],
          ],
          heading: [""],
          name: ""
        };
        return template;
      case "Statement":
      template['recom'] = {
          type: "statement",
          name: "",
          items: [
            {state: ''}
          ],
        };
        return template;
    }
  }

  handleDrop(event, index) {
    const newTemplate = this.getNewTemplate(
      event.dataTransfer.getData("templateName")
    );
    if (newTemplate){
      this.templates.splice(index, 0, newTemplate);
    }
  }

  handleSave() {
    const json = {name: this.name, description: this.description, template: this.templates};
    console.log(JSON.stringify(json));
  }

  updates() {
    const json = {name: this.name, description: this.description, template: this.templates};
    console.log(json);
  }
}
