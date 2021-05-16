import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  uri = environment.url;

  constructor(private http: HttpClient) { }

  
  //Listar un genero
  async genreList () {
    try {
      let respuesta : any;
      respuesta = await this.http.get(this.uri+'/genero').toPromise();
      return respuesta;
    } 
    catch (error) {
      console.log(error.message);
      return;
    }
  }


  async buscarGeneroPorID(idGenero= ''){
    try {
      let respuesta : any;

      if (idGenero != ''){
        respuesta = await this.http.get(this.uri+'/genero/'+idGenero).toPromise();
        return [respuesta]; //Transformo en Array porque es uno solo
      }
    } catch (error) {
      console.log(error.message)

    }
  }
  

  async modificarGenero(unGenero){
    try {      
      
      await this.http.put(this.uri+'/genero/'+unGenero._id, {nombre: unGenero.nombre}, {responseType: 'text'}).toPromise();
      return true;
    }
     
    catch (error) {
      console.log(error.message)
      return false;
    }
  }

  async genrePost(newGender) {
    try {
      await this.http.post(this.uri+'/genero', newGender, {responseType: 'text'}).toPromise();
      return true;
    }
    
    catch (e){
      console.log(e);
      return false;
    }
  }

  async genreDelete(unGenero) {
    try {
      console.log(unGenero);
      await this.http.delete(this.uri+'/genero/'+unGenero, {responseType: 'text'}).toPromise();
      return true;
    }
    
    catch (e){
      console.log(e);
      return false;
    }
  }
}
