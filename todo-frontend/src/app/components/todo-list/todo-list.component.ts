import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  selectedPriority: string = 'ALL';
  editingId: number | null = null;
  editText: string = '';

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

  startEdit(todo: Todo) {
    this.editingId = todo.id!;
    this.editText = todo.taskDesc;
  }

  saveEdit(todo: Todo) {
    if (todo.id) {
      const updatedTodo: Todo = { ...todo, taskDesc: this.editText };
      this.todoService.updateTask(todo.id, updatedTodo).subscribe(() => {
        this.editingId = null;
        this.loadTasks();
      });
    }
  }

  cancelEdit() {
    this.editingId = null;
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
