import { Component, OnInit } from "@angular/core";

export interface ItemStateModel {
  state: string;
  impression: string;
  PI: string;
}

export interface ItemModel {
  name: string;
  visible: boolean;
  stateoptions: Array<ItemStateModel>;
}

export interface SectionModel {
  name: string;
  type: string;
  items: Array<ItemModel>;
}

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.css"]
})
export class SectionComponent implements OnInit {
  section: SectionModel = {
    name: "Liver",
    type: "Section",
    items: [
      {
        name: "",
        stateoptions: [],
        visible: true
      }
    ]
  };

  constructor() {}

  addItem() {
    this.section.items.push({
      name: "ItemName",
      stateoptions: [],
      visible: true
    });
  }

  addState(itemIndex) {
    this.section.items[itemIndex].stateoptions.push({
      state: "",
      impression: "",
      PI: ""
    });
  }

  ngOnInit() {}
}
