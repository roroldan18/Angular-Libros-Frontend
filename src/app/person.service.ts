import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

 uri = environment.url;


  constructor(private http: HttpClient) { }

    
  async personList () {
    try {
      let response = await this.http.get(this.uri+'/persona').toPromise();
      return response;
    }
    catch (e){
      console.log(e);
      return;
    }
  }

  async personPost (newPerson) {
    try {
      const paquete = {
        nombre : newPerson.nombre,
        apellido: newPerson.apellido,
        alias: newPerson.alias,
        email: newPerson.email,
        celu: newPerson.celu
      }

      await this.http.post(this.uri+'/persona', paquete, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }

  async personDelete (aPerson) {
    try {
      await this.http.delete(this.uri+'/persona/'+aPerson, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }

  async personPut (newPerson) {
    
    try {
      await this.http.put(this.uri+'/persona/'+newPerson._id, {celu: newPerson.celu}, {responseType: 'text'}).toPromise();
      return true;
    }
    catch (e){
      console.log(e);
      return false;
    }
  }

}
