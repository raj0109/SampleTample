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
  state: string;
  impression: string;
  type: string;
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
      stateoptions: [{state: "", impression: "", PI: ""}],
      visible: true,
      state: "",
      impression: "",
      type: "TEXT"
    });
  }

  addState(itemIndex) {
    this.buildJSON.items[itemIndex].stateoptions.push({
      state: "",
      impression: "",
      PI: ""
    });
    if (this.buildJSON.items[itemIndex].stateoptions.length > 1) {
      this.buildJSON.items[itemIndex].type = "RADIO";
    } else {
      this.buildJSON.items[itemIndex].type = "TEXT";
    }
  }

  deleteState(itemIndex, stateIndex) {
    this.buildJSON.items[itemIndex].stateoptions.splice(stateIndex, 1);
    if (this.buildJSON.items[itemIndex].stateoptions.length > 1) {
      this.buildJSON.items[itemIndex].type = "RADIO";
    } else {
      this.buildJSON.items[itemIndex].type = "TEXT";
    }  
  }

  deleteItem(itemIndex: number) {
    this.buildJSON.items.splice(itemIndex, 1);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  updateDefaultState(value, itemIndex) {
    this.buildJSON.items[itemIndex].state = value;
  }

  updateDefaultImpression(value, itemIndex) {
    this.buildJSON.items[itemIndex].impression = value;
  }
}
