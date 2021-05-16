import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  titulos = 'Listado de libros';

  @Input() libros = [];
  


  constructor() { }

  ngOnInit(): void {
  }

}
