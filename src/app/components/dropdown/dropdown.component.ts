import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
  menu = [
    {
      software: "Windows",
    },
    {
      software: "Linux",
    },
    {
      software: "Windows Server",
    },
    {
      software: "Windows Server Django y Ruby",
    },
    {
      software: "Usuarios y Grupos Windows Server",
    },
    {
      software: "Linux Server",
    },
    {
      software: "Linux Server Django y Ruby",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
