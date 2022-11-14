import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: ITodo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').subscribe({
        next: (res) => {
          this.todos = res;
        }
      });
  }

}

export interface ITodo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}
