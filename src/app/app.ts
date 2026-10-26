import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeader } from './components/common/top-header/top-header';
import { Navbar } from './components/common/navbar/navbar';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopHeader, Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotelsBook');
}
