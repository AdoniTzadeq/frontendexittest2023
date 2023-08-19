import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendapiserviceService } from '../backendapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tasks: any = [];
  constructor(private api: BackendapiserviceService, private route: Router) {}

  ngOnInit() {
    this.api.getTasks().subscribe((res: any) => {
      this.tasks = res.data;
    });
  }
}
