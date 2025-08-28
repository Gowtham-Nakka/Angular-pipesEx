import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = { taskDesc: '', priority: 'LOW', markTask: 'PENDING' };

  constructor(private todoService: TodoService) {}

  addTask() {
    this.todoService.createTask(this.todo).subscribe(() => {
      alert('Task Created!');
      this.todo = { taskDesc: '', priority: 'LOW', markTask: 'PENDING' };
    });
  }
}
