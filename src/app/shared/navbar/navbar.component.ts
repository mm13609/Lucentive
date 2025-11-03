import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass],
  template: `
  <header class="sticky top-0 z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur border-b border-slate-200/70 dark:border-slate-800">
    <div class="container flex h-16 items-center justify-between">
      <!-- Brand -->
      <a routerLink="/" class="flex items-center gap-2" aria-label="Mustafa Consulting Group home">
        <img class="h-10 w-10" src="/assets/logo.png" alt="Mustafa Consulting Group logo" />
        <span class="text-lg font-semibold tracking-tight">Mustafa Consulting Group</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Primary">
        <a routerLink="/services" routerLinkActive="text-brand-600 font-semibold" class="hover:text-brand-600">How We Help</a>
        <a routerLink="/case-studies" routerLinkActive="text-brand-600 font-semibold" class="hover:text-brand-600">Results</a>
        <a routerLink="/about" routerLinkActive="text-brand-600 font-semibold" class="hover:text-brand-600">About</a>
        <a routerLink="/contact" class="btn-primary">Let’s Talk</a>
        <button (click)="toggleDark.emit()" class="btn-ghost" aria-label="Toggle dark mode">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </nav>

      <!-- Mobile controls -->
      <div class="md:hidden flex items-center gap-2">
        <button (click)="toggleDark.emit()" class="btn-ghost" aria-label="Toggle dark mode">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button (click)="open.set(!open())"
                class="inline-flex items-center rounded-md px-3 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                [attr.aria-expanded]="open()"
                aria-controls="mobile-menu"
                aria-label="Toggle menu">
          <svg *ngIf="!open()" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
          <svg *ngIf="open()" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.41 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29 10.59 10.59 16.88 4.29z"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div *ngIf="open()" id="mobile-menu" class="md:hidden border-t border-slate-200 dark:border-slate-800">
      <nav class="container py-3 grid gap-2" aria-label="Mobile">
        <a routerLink="/services" (click)="open.set(false)" class="px-2 py-2 rounded hover:bg-brand-50 dark:hover:bg-slate-800">How We Help</a>
        <a routerLink="/case-studies" (click)="open.set(false)" class="px-2 py-2 rounded hover:bg-brand-50 dark:hover:bg-slate-800">Results</a>
        <a routerLink="/about" (click)="open.set(false)" class="px-2 py-2 rounded hover:bg-brand-50 dark:hover:bg-slate-800">About</a>
        <a routerLink="/contact" (click)="open.set(false)" class="btn-primary justify-center">Let’s Talk</a>
      </nav>
    </div>
  </header>
  `
})
export class NavbarComponent {
  @Output() toggleDark = new EventEmitter<void>();
  open = signal(false);
}
