import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class WrapperComponent {}
