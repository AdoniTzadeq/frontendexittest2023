import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendapiserviceService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any>(`http://localhost:3000/api/v1/tasks/`);
  }
  addItem(data: any) {
    return this.http.post<any>(`http://localhost:3000/api/v1/tasks/`, data);
  }
}
