import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-container-person',
  templateUrl: './container-person.component.html',
  styleUrls: ['./container-person.component.css']
})
export class ContainerPersonComponent implements OnInit {

persons: any = [];

  constructor(private personService: PersonService) { }

  async ngOnInit() {
        //Agrego al array person los datos del service
        this.persons = await this.personService.personList();
  }

  async personReceived(newPerson){
    const response = await this.personService.personPost(newPerson);
    return response;
  };

  async personaRecibida(unaPersona){
    const response = await this.personService.personDelete(unaPersona);
    return response;
  };

  async personaAModificar(unaPersona){
    const response = await this.personService.personPut(unaPersona);
    return response;
  };

}
