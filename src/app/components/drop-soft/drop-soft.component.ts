import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-soft',
  templateUrl: './drop-soft.component.html',
  styleUrls: ['./drop-soft.component.css']
})
export class DropSoftComponent implements OnInit {
  menu = [
    {
      software: 'Servicios'
    },
    {
      software: 'Free Office'
    },
    {
      software: 'Java'
    },
    {
      software: 'Django'
    },
    {
      software: 'Ruby on Rails'
    },
    {
      software: 'Ionic'
    },
    {
      software: 'VideoJuego'
    },
    {
      software: 'Django'
    },
    {
      software: 'Samba'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
