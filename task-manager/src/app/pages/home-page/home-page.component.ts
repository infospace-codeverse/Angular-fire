import { Component } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
