import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { GenreService } from 'src/app/genre.service';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {

  @Output() newGender = new EventEmitter();
  @Output() borrarGenero = new EventEmitter();
  @Output() putGenero = new EventEmitter();

  @Input() genders = [];


  bookGender = {
    _id: '',
    nombre: ''};

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
  }

  //POST de genero
  async sendGender() {

    if(this.bookGender.nombre == ''){
      alert('No completaste todos los campos del formulario');
    }

    else{
      //Si están todos los datos, guardo el genero en el service
      let resp = false;
      
      resp = await this.genreService.genrePost(this.bookGender);

      if(resp){
        this.bookGender.nombre = '';
        this.newGender.emit();
        alert('Genero agregado con exito!');
        location.reload();
      }
      else {
        alert('Hubo un error en el guardado, verifique');
      }
    }
  }

//BORRAR GENERO
  async deleteGender() {

    if(this.bookGender._id == ''){
      alert('No elegiste el genero a borrar');
    }

    else{
      //Si están todos los datos, llamo al metodo delete.
      let resp = false;
      
      resp = await this.genreService.genreDelete(this.bookGender._id);

      if(resp){
        this.bookGender.nombre = '';
        this.bookGender._id = '';
        this.borrarGenero.emit();
        alert('Genero eliminado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }

//MODIFICAR GENERO
  async modificarGenero() {

    
    if(this.bookGender._id == ''){
      alert('No elegiste el genero a modificar');
    }
     
    else{
      let resp = false;
      
      resp = await this.genreService.modificarGenero(this.bookGender);

      if(resp){
        this.bookGender.nombre = '';
        this.bookGender._id = '';
        this.putGenero.emit();
        alert('Genero modificado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }
}