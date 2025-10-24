import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <a class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-600 text-white px-3 py-2 rounded" href="#main">Skip to content</a>
    <app-navbar (toggleDark)="toggle()"></app-navbar>
    <main id="main"><router-outlet></router-outlet></main>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  dark = signal<boolean>(false);
  constructor() {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.dark.set(prefers);
    document.documentElement.classList.toggle('dark', prefers);
  }
  toggle() {
    this.dark.set(!this.dark());
    document.documentElement.classList.toggle('dark', this.dark());
  }
}
