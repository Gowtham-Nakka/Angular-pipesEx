import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/getAllTasks`);
  }

  getTaskByPriority(priority: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/getTaskByPriority/${priority}`);
  }

  createTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/createTask`, todo);
  }

  updateTask(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/updateTask/${id}`, todo);
  }

  markTask(id: number, status: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/${id}/mark?markTask=${status}`, {});
  }

  deleteTask(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteTaskById/${id}`);
  }
}
