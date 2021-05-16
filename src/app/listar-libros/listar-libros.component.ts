import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { GenreService } from '../genre.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  genders: any = [];
  books: any = [];
  persons: any = [];
  libros: any = [];

bookID = '';
nombre = '';
generoID = '';
personID = '';


  book : any = [{
    _id: '',
    nombre : '',
    descripcion : '',
    genero : '',
    persona : '',
  }]

  constructor(
    private genreService: GenreService,
    private personService: PersonService,
    private bookService: BookService) { }

  async ngOnInit() {

     //Agrego al array books los datos del service
    this.books= await this.bookService.bookList();
    this.genders = await this.genreService.genreList();
    this.persons = await this.personService.personList();
 
  };

  async listBookNombre() {
    this.book = await this.bookService.bookListNombre(this.nombre);
    

    //agregar genero.nombre y persona.alias a los libros
    this.libros = this.book.map((book) => {
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

  async listBookID() {

    this.book = await this.bookService.bookListID(this.bookID);

    this.libros = this.book.map((book) => {
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

  async listBookGenero() {

     this.book = await this.bookService.bookListGenero(this.generoID);

    //agregar genero.nombre y persona.alias a los libros
    this.libros = this.book.map((book) => {
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

  async listBookPerson() {

    this.book = await this.bookService.bookListPerson(this.personID);


    //agregar genero.nombre y persona.alias a los libros
    this.libros = this.book.map((book) => {
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

}
