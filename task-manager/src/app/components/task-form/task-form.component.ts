import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      const task: Task = { title: this.taskTitle };
      this.taskService.addTask(task);
      this.taskTitle = '';
    }
  }
}
