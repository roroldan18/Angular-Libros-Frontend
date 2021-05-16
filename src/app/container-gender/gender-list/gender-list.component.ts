import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {

  titulos = 'Listado de generos';

  @Input() genders = [];

  constructor() { }

  ngOnInit(): void {
  }

}
