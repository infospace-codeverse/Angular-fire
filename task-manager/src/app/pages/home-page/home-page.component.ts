import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
// import { TodosFirebaseService } from '../../services/todosFirebase.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [HeaderComponent, FooterComponent, MainComponent],
})
export class HomePageComponent {
  // todosService = inject(TodosService);
  // todosFirebaseService = inject(TodosFirebaseService);

  ngOnInit(): void {
    // this.todosFirebaseService.getTodos().subscribe((todos) => {
    //   this.todosService.todosSig.set(todos);
    // });
  }
}
