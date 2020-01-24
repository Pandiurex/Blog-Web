import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  images = [
    {
      img: "windows-10"
    },
    {
      img: "linux"
    },
    {
      img: "windows-server"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
