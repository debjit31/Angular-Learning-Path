import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }
  // set dynamic classes
  setClasses(){
    let classes = {
      todo : true, 
      'is-complete' : this.todo.completed
    }
    return classes;
  }
  onToggle(todo){
    this.todo.completed = !this.todo.completed;
  }
  onDelete(todo){
    console.log('delete')
  }
}
