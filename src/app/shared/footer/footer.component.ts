import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
  <footer class="mt-20 border-t border-slate-200 dark:border-slate-800">
    <div class="container py-10 grid gap-8 md:grid-cols-4">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-3">
        <img class="h-8 w-8" src="/assets/logo.png" alt="Lucentive logo" />
          <span class="text-lg font-semibold">Lucentive</span>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Intelligent systems that make growth measurable — more inquiries, less busywork, clearer decisions.
        </p>
      </div>

      <!-- Company -->
      <div>
        <h3 class="font-semibold mb-3">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a routerLink="/about" class="hover:text-brand-600">About</a></li>
          <li><a routerLink="/services" class="hover:text-brand-600">How We Help</a></li>
          <li><a routerLink="/case-studies" class="hover:text-brand-600">Results</a></li>
        </ul>
      </div>

      <!-- How We Help -->
      <div>
        <h3 class="font-semibold mb-3">How We Help</h3>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>Capture more inquiries</li>
          <li>Reduce repetitive busywork</li>
          <li>Improve response & conversion</li>
          <li>Make decisions with clarity</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="font-semibold mb-3">Contact</h3>
        <p class="text-sm">
          <a href="mailto:mustafamohammad92@gmail.com" class="hover:text-brand-600">mustafamohammad92&#64;gmail.com</a>
        </p>
        <p class="text-sm mt-2">
             Phone: <a href="tel:+18177390951" class="hover:text-brand-600">+1 (817) 739-0951</a>
        </p>
                <p class="text-sm mt-2">
             Address: <a href="https://www.google.com/maps/place/3909+Bentley+Dr,+Bedford,+TX+76021" target="_blank" class="hover:text-brand-600">3909 Bentley Dr, Bedford, TX 76021</a>
        </p>

      </div>
    </div>

    <div class="border-t border-slate-200 dark:border-slate-800 py-6">
      <div class="container text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>&copy; {{year}} Lucentive. All rights reserved.</div>
        <!-- <div class="flex gap-4">
          <a routerLink="/privacy" class="hover:text-brand-600">Privacy</a>
          <a routerLink="/terms" class="hover:text-brand-600">Terms</a>
        </div> -->
      </div>
    </div>
  </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
