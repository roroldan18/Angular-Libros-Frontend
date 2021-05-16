import { identifierModuleUrl } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-form-person',
  templateUrl: './book-form-person.component.html',
  styleUrls: ['./book-form-person.component.css']
})
export class BookFormPersonComponent implements OnInit {

  @Input() books = [];
  @Input() persons = [];

  @Output() nuevoPrestamoEnviado = new EventEmitter();
  @Output() nuevaDevolucion = new EventEmitter();

  nuevoPrestamo = {
    nombre: '',
    persona: '',
  }

  devolucion = '';


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  async agregarPersonaPrestado() {
    
    if (this.nuevoPrestamo.nombre == '' || this.nuevoPrestamo.persona == '') {
      alert('No elegiste todos los datos para el prestamo');
    }

    else {
      //Si están todos los datos, llamo al metodo Put.
      let resp = false;

      resp = await this.bookService.bookPut(this.nuevoPrestamo);

      if (resp) {
        this.nuevoPrestamo.nombre = '';
        this.nuevoPrestamo.persona = '';
        this.nuevoPrestamoEnviado.emit(this.nuevoPrestamo)
        alert('Libro Prestado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }

  async devolverLibro() {
    
    if (this.devolucion == '') {
      alert('No elegiste todos los datos para la devolucion');
    }

    else {
      let resp = false;

      resp = await this.bookService.bookPutDev(this.devolucion);

      if (resp) {
        this.devolucion = '';
        this.nuevaDevolucion.emit(this.devolucion)
        alert('Libro devuelto con exito!');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }

}
