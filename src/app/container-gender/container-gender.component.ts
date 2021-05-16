import { Component, Input, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-container-gender',
  templateUrl: './container-gender.component.html',
  styleUrls: ['./container-gender.component.css']
})
export class ContainerGenderComponent implements OnInit {

  genders: any = [];

  /* En el constructor agrego el Genreservice que importo del archivo del service */
  constructor(private genreService: GenreService) { }


  async ngOnInit() {
    //Agrego al array genders los datos del service
    this.genders = await this.genreService.genreList();
  }

  async genderReceived(newGender){
    const response = await this.genreService.genrePost(newGender);
    return response;
  };
  
  async generoRecibido(generoABorrar){
    const response = await this.genreService.genreDelete(generoABorrar);
    return response;
  };

  async generoAModificar(generoAModificar){
    const response = await this.genreService.modificarGenero(generoAModificar);
    return response;
  };
}
