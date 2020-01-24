import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  menu = [
    {
      software: 'Windows',
    },
    {
      software: 'Linux'
    },
    {
      software: 'Windows Server'
    },
    {
      software: 'Linux Server'
    }
  ];

  constructor() {  }

  ngOnInit() {}
}
