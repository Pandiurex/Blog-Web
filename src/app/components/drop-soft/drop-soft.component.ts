import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drop-soft",
  templateUrl: "./drop-soft.component.html",
  styleUrls: ["./drop-soft.component.css"],
})
export class DropSoftComponent implements OnInit {
  menu = [
    {
      software: "Servicios",
    },
    {
      software: "Free-Office",
    },
    {
      software: "Java",
    },
    {
      software: "Django",
    },
    {
      software: "Laravel",
    },
    {
      software: "Ruby",
    },
    {
      software: "Ionic",
    },
    {
      software: "VideoJuego",
    },
    {
      software: "Samba",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
