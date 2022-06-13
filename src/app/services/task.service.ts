import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,of } from 'rxjs';
import {TASKS} from '../mock-tasks'
import {Task} from '../Task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task:Task): Observable<Task[]>{
    const url=
  }
}