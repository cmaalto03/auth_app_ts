import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dummy-data',
  imports: [CommonModule],
  templateUrl: './dummy-data.component.html',
  styleUrl: './dummy-data.component.css',
})
export class DummyDataComponent implements OnInit {
  private todosService = inject(TodosService);

  public todos$: Observable<Todo[]> | null = null;

  ngOnInit(): void {
    this.todos$ = this.todosService
      .get()
      .pipe(map((todos) => todos.slice(0, 10)));
  }
}
