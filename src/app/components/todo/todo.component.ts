import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        "id": 1,
        "title": "Todo One",
        "completed": true
      },
      {
        "id": 2,
        "title": "Todo Two",
        "completed": false
      },
      {
        "id": 3,
        "title": "Todo Three",
        "completed": true
      },
    ]
  }

}
