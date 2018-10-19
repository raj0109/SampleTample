import { Component, OnInit, Input, OnChanges } from "@angular/core";

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
export class SectionComponent implements OnChanges {
  @Input()
  buildJSON: SectionModel;

  constructor() {}

  addItem() {
    this.buildJSON.items.push({
      name: "ItemName",
      stateoptions: [],
      visible: true
    });
  }

  addState(itemIndex) {
    this.buildJSON.items[itemIndex].stateoptions.push({
      state: "",
      impression: "",
      PI: ""
    });
  }

  deleteState(itemIndex, stateIndex) {
    this.buildJSON.items[itemIndex].stateoptions.splice(stateIndex, 1);
  }

  deleteItem(itemIndex: number) {
    this.buildJSON.items.splice(itemIndex, 1);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
