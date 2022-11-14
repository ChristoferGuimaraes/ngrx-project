import { TodoComponent } from './components/todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos'},
  { path: 'counter', component: CounterComponent },
  { path: 'todos', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
