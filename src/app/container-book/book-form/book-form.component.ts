import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() genders = [];
  @Input() persons= [];
  @Input() books = []

  @Output() newBook = new EventEmitter;
  @Output() borrarLibro = new EventEmitter;
  @Output() modificarDescripcion = new EventEmitter;


  book = {
    _id: '',
    nombre : '',
    descripcion : '',
    genero : '',
    persona : ''
}
  constructor(private BookService: BookService) { }

  ngOnInit(): void {
  }

  async sendBook() {

    if (this.book.nombre == '' || this.book.descripcion == '' || this.book.genero == ''){
      alert('No completaste todos los campos del formulario');
    }

    else{
      let resp = false;
      resp = await this.BookService.bookPost(this.book);

      if (this.book.persona == ''){
          alert('Vas a dar de alta un libro que no está prestado')
        }

      if(resp){
        this.book = {
          _id: '',
          nombre : '',
          descripcion : '',
          genero : '',
          persona : ''
        };


        this.newBook.emit();
        alert('Libro agregado con exito!');
        location.reload();
      }
      else {
        alert('Hubo un error en el guardado, verifique');
      }
    }
  }

  async deleteBook(){
    if(this.book._id == ''){
      alert('No elegiste el libro a borrar');
    }

    else{
      //Si están todos los datos, llamo al metodo delete.
      let resp = false;
      
      resp = await this.BookService.bookDelete(this.book._id);

      if(resp){
        this.book = {
          _id: '',
          nombre : '',
          descripcion : '',
          genero : '',
          persona : ''
        };
        this.borrarLibro.emit(this.book._id)
        alert('Libro eliminado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }
  async putBookDescription(){

    if(this.book._id == '' || this.book.descripcion == ''){
      alert('No mandaste todos los datos a modificar');
    }


    else{
      //Si están todos los datos, llamo al metodo delete.
      let resp = false;
      
      resp = await this.BookService.bookPutDescription(this.book);

      if(resp){
        this.book = {
          _id: '',
          nombre : '',
          descripcion : '',
          genero : '',
          persona : ''
        };
        this.modificarDescripcion.emit(this.book)
        alert('Descripcion modificada con exito!');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }

}
