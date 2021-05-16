import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { GenreService } from '../genre.service';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-container-book',
  templateUrl: './container-book.component.html',
  styleUrls: ['./container-book.component.css']
})
export class ContainerBookComponent implements OnInit {

  libros: any = [];
  books: any = [];
  genders: any = [];
  persons: any = [];


  constructor(
    private bookService: BookService, 
    private genreService: GenreService,
    private personService: PersonService
    ) { }

  async ngOnInit() {

    //Agrego al array books los datos del service
    this.books= await this.bookService.bookList();
    this.genders = await this.genreService.genreList();
    this.persons = await this.personService.personList();
    

    //agregar genero.nombre y persona.alias a los libros
    this.libros = this.books.map((book) => {
      //busco el genero correspondiente al id que tengo de genero en el libro
      let genero = this.genders.find((item) => {
        if (item._id == book.genero){
          return item;
        };
      });

      let persona = this.persons.find((element) => {
        if (element._id == book.persona){
          return element;
        }
        else {
          return null
        }
      });

      let newBook = {
        nombre: '',
        descripcion: '',
        persona: '',
        genero: '',
      };

      if (persona == undefined){
        newBook = {
          nombre: book.nombre,
          descripcion: book.descripcion,
          persona: null,
          genero: genero,
        }
      }   
      else{
          newBook = {
            nombre: book.nombre,
            descripcion: book.descripcion,
            persona: persona.alias,
            genero: genero,
         };
        }
      

      return newBook;
    });
  }

  async bookReceived(newBook){
    const response = await this.bookService.bookPost(newBook);
    return response;
  }

  async libroPrestado(nuevoPrestamo){
    const response = await this.bookService.bookPut(nuevoPrestamo);
    return response;
  }

  async bookReceivedToDelete (unLibro){
    const response = await this.bookService.bookDelete(unLibro);
    return response;
  }

  async bookPutDescription (unLibro){
    const response = await this.bookService.bookPutDescription(unLibro);
    return response;
  }

}
