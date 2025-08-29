import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8080/api/todos'; // ✅ Your Spring Boot backend

  constructor(private http: HttpClient) {}

  // CREATE
  createTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/createTask`, todo);
  }

  // READ
  getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/getAllTasks`);
  }

  getTaskByPriority(priority: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/getTaskByPriority/${priority}`);
  }

  // UPDATE
  updateTask(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/updateTask/${id}`, todo);
  }

  markTask(id: number, markTask: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}/mark?markTask=${markTask}`, {});
  }

  // DELETE
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteTaskById/${id}`, { responseType: 'text' });
  }
}
