import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = { taskDesc: '', priority: 'LOW', markTask: 'PENDING' };

  constructor(private todoService: TodoService) {}

  addTask() {
    if (this.todo.taskDesc.trim()) {
      this.todoService.createTask(this.todo).subscribe(() => {
        alert('Task Created!');
        this.todo = { taskDesc: '', priority: 'LOW', markTask: 'PENDING' };
      });
    }
  }
}
