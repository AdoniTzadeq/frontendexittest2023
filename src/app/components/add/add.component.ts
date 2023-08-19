import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendapiserviceService } from '../backendapiservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private api: BackendapiserviceService) {}

  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    console.log(this.taskForm.value);

    this.api
      .addItem(this.taskForm.value)
      .subscribe((data) => console.log(data));
  }
}
