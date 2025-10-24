import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="section">
    <div class="container max-w-5xl grid lg:grid-cols-2 gap-10">
      <!-- Intro -->
      <header>
        <span class="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-medium">Contact</span>
        <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Let’s simplify your growth</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          Reach out by email or phone. We’ll schedule a short, no-pressure strategy call to identify
          <strong>2–3 improvements</strong> that can pay for themselves quickly.
        </p>

        <!-- Trust bullets -->
        <div class="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
          <div class="card p-3 text-center">Local & responsive</div>
          <div class="card p-3 text-center">Plain-English plans</div>
          <div class="card p-3 text-center">Pilot first, then scale</div>
        </div>

        <!-- What happens next -->
        <div class="mt-8 card p-6">
          <h2 class="text-lg font-semibold">What happens next</h2>
          <ol class="mt-3 text-sm text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
            <li>We reply within one business day to book a quick call.</li>
            <li>On the call, we clarify goals and spot the fastest ROI wins.</li>
            <li>You get a simple action plan with clear next steps.</li>
          </ol>
        </div>
      </header>

      <!-- Direct contact options -->
      <aside class="space-y-6">
        <div class="card p-6">
          <h2 class="text-lg font-semibold">Call Us</h2>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            Prefer to talk now? We’re happy to chat.
          </p>
          <a href="tel:+18177390951"
             class="mt-4 inline-flex items-center gap-2 btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
            +1 (817) 739-0951
          </a>
          <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Hours: Mon–Fri 9:00am–9:00pm (local time)
          </p>
        </div>

        <div class="card p-6">
          <h2 class="text-lg font-semibold">Email Us</h2>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            Send a note with a brief description of what you’d like to improve.
          </p>
          <a href="mailto:mustafamohammad92@gmail.com"
             class="mt-4 inline-flex items-center gap-2 btn-ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>
            mustafamohammad92&#64;gmail.com
          </a>
          <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Typical response time: within 1 business day
          </p>
        </div>

        <div class="card p-6">
          <h2 class="text-lg font-semibold">Prefer messaging?</h2>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            Use email to share details; we’ll follow up with a quick call or reply.
          </p>
          <a routerLink="/services" class="mt-4 inline-flex items-center btn-ghost">See how we help</a>
        </div>
      </aside>
    </div>
  </section>
  `
})
export class ContactComponent {}
