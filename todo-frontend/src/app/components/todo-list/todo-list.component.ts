import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  selectedPriority: string = 'ALL';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    if (this.selectedPriority === 'ALL') {
      this.todoService.getAllTasks().subscribe(data => this.todos = data);
    } else {
      this.todoService.getTaskByPriority(this.selectedPriority).subscribe(data => this.todos = data);
    }
  }

  filterByPriority(priority: string) {
    this.selectedPriority = priority;
    this.loadTasks();
  }

  markAsCompleted(todo: Todo) {
    if (todo.id) {
      this.todoService.markTask(todo.id, 'COMPLETED').subscribe(() => this.loadTasks());
    }
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
