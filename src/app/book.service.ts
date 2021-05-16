import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  uri = environment.url;



  constructor(private http: HttpClient) { }

    
  async bookList () {
    try {
      let response = await this.http.get(this.uri+'/libro').toPromise();

      return response;
    }
    catch (e){
      console.log(e);
      return;
    }
  }

  async bookListNombre (nombre){
    try {
      let response = await this.http.get(this.uri+'/libro/searchName/'+nombre).toPromise();
      return response;
    } 
    catch (e) {
      console.log(e);
      return;
    }
  }

  async bookListGenero (generoID){
    try {
      let response = await this.http.get(this.uri+'/libro/searchGenre/'+generoID).toPromise();
      return response;
    } 
    catch (e) {
      console.log(e);
      return;
    }
  }

  async bookListPerson (personID){
    try {
      let response = await this.http.get(this.uri+'/libro/searchPerson/'+personID).toPromise();
      return response;
    } 
    catch (e) {
      console.log(e);
      return e;
    }
  }
    
  async bookListID (libroID) {
    try {
      let response = await this.http.get(this.uri+'/libro/'+libroID).toPromise();
      return [response];
    }
    catch (e){
      console.log(e);
      return;
    }
  }


  async bookPost(newBook) {
    try {
      const paquete = {
        nombre : newBook.nombre,
        genero: newBook.genero,
        descripcion: newBook.descripcion,
        persona: newBook.persona
      } 


      await this.http.post(this.uri+'/libro', paquete, {responseType: 'text'}).toPromise();
      return true;

    }
    catch (e){
      console.log(e);
      return false;
    }
  }

  async bookPut (nuevoPrestamo) {
    try {
      await this.http.put(this.uri+'/libro/prestar/'+nuevoPrestamo.nombre, {persona: nuevoPrestamo.persona}, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }

  async bookPutDev (devolucion) {
    try {
      await this.http.put(this.uri+'/libro/devolver/'+devolucion, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }


  async bookDelete (unLibro) {
    try {
      await this.http.delete(this.uri+'/libro/'+unLibro, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }

  async bookPutDescription (unLibro) {
    try {
      await this.http.put(this.uri+'/libro/'+unLibro._id,  {descripcion: unLibro.descripcion}, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }
}
