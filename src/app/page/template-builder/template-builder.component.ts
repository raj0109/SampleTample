import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css']
})
export class TemplateBuilderComponent {
  title = "JSONTemplate";
  templates: any[] = [];
  name;
  description;

  dragMode = false;

  constructor(private http: HttpClient) {

  }
  addSection() {
    this.templates.push(this.getNewTemplate("Section"));
  }

  addStatement() {
    this.templates.push(this.getNewTemplate("Statement"));
  }

  addTable() {
    this.templates.push(this.getNewTemplate("Table"));
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
              stateoptions: [{state: "", impression: ""}],
              visible: true,
              type: "TEXT",
              state: "",
              impression: ""
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
    this.http.post('templates', json).subscribe(() => {
      console.log('success');
    });
  }

  updates() {
    const json = {name: this.name, description: this.description, template: this.templates};
    console.log(json);
  }

  deleteTemplate(index) {
    this.templates.splice(index, 1);
  }

}
