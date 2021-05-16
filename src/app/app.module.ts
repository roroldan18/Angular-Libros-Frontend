import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from './container/container.component';
import { ContainerPersonComponent } from './container-person/container-person.component';
import { ContainerGenderComponent } from './container-gender/container-gender.component';
import { ContainerBookComponent } from './container-book/container-book.component';
import { GenderFormComponent } from './container-gender/gender-form/gender-form.component';
import { GenderListComponent } from './container-gender/gender-list/gender-list.component';
import { PersonFormComponent } from './container-person/person-form/person-form.component';
import { PersonListComponent } from './container-person/person-list/person-list.component';
import { BookFormComponent } from './container-book/book-form/book-form.component';
import { BookListComponent } from './container-book/book-list/book-list.component';
import { BookFormPersonComponent } from './container-book/book-form-person/book-form-person.component';
import { FormsModule } from '@angular/forms';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerPersonComponent,
    ContainerGenderComponent,
    ContainerBookComponent,
    GenderFormComponent,
    GenderListComponent,
    PersonFormComponent,
    PersonListComponent,
    BookFormComponent,
    BookListComponent,
    BookFormPersonComponent,
    ListarLibrosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
