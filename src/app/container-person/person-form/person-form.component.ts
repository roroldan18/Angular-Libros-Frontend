import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Output() newPerson = new EventEmitter();
  @Output() borrarPersona = new EventEmitter();
  @Output() putPersona = new EventEmitter();
  @Input() persons = [];


  titulo = 'Nuevo formulario';

  person = {
    _id: '',
    nombre : '',
    apellido : '',
    alias : '',
    email : '',
    celu : ''
}

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  async sendPerson() {
    if (this.person.nombre == '' || this.person.apellido == '' || this.person.alias == '' || this.person.email == '' || this.person.celu == ''){
      alert('No completaste todos los campos del formulario');
    }

    else{
      //Si están todos los datos, guardo la persona en el service
      let resp = false;
      resp = await this.personService.personPost(this.person);

      if(resp){
        this.person = {
          _id: '',
          nombre : '',
          apellido : '',
          alias : '',
          email : '',
          celu : ''
        };

        this.newPerson.emit();
        alert('Persona agregada con exito!');
        location.reload();
      }
      else {
        alert('Hubo un error en el guardado, verifique');
      }
    }
    this.newPerson.emit(this.person);
  }

  async deletePerson() {
    
    if(this.person._id == ''){
      alert('No elegiste la persona a borrar');
    }

    else{
      //Si están todos los datos, llamo al metodo delete.
      let resp = false;
      
      resp = await this.personService.personDelete(this.person._id);

      if(resp){
        this.person.nombre = '';
        this.person.apellido = '';
        this.person.alias = '';
        this.person.email = '';
        this.person._id = '';
        this.person.celu = '';
        this.borrarPersona.emit(this.person._id)
        alert('Persona eliminado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }
  
  async putPerson() {
      
    if(this.person._id == ''){
      alert('No elegiste la persona a modificar');
    }

    else{
      //Si están todos los datos, llamo al metodo Put.
      let resp = false;
      
      resp = await this.personService.personPut(this.person);

      if(resp){
        this.person.nombre = '';
        this.person.apellido = '';
        this.person.alias = '';
        this.person.email = '';
        this.person._id = '';
        this.person.celu = '';
        this.putPersona.emit(this.person._id)
        alert('Celular modificado');
        location.reload();
      }
      else {
        alert('Hubo un error, verifique');
      }
    }
  }
}
