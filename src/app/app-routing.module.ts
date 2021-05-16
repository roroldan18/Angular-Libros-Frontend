import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerGenderComponent } from './container-gender/container-gender.component';
import { ContainerPersonComponent } from './container-person/container-person.component';
import { ContainerBookComponent } from './container-book/container-book.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';

const routes: Routes = [{
  path: 'genders',
  component: ContainerGenderComponent
},
{
  path: 'persons',
  component: ContainerPersonComponent
},
{
  path: 'books',
  component: ContainerBookComponent
},
{
  path: 'listar',
  component: ListarLibrosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
