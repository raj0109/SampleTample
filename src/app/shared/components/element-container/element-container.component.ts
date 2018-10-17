import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-element-container",
  templateUrl: "./element-container.component.html",
  styleUrls: ["./element-container.component.css"]
})
export class ElementContainerComponent implements OnInit {
  x = 10;
  y = 10;
  height = 100;
  width = 200;
  constructor() {}

  ngOnInit() {}
}
