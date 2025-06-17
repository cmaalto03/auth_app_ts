import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);

  public get(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
