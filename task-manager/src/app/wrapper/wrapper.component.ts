import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
  imports: [RouterOutlet],
})
export class WrapperComponent {}
