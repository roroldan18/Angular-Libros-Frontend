import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  titulos = 'Listado de personas'

  @Input() persons = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
