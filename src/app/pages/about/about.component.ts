import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Stat = { label: string; value: string; helper?: string };
type Value = { title: string; text: string; icon: string };
type Step = { year: string; title: string; text: string };

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="section">
    <div class="container max-w-5xl">
      <!-- Hero -->
      <div class="text-center">
        <span class="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-medium">About Us</span>
        <h1 class="mt-4 text-4xl font-bold">We make technology pay for itself</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We partner with growing businesses to turn everyday operations into a growth engine—more inquiries,
          faster response, clearer decisions. Plain language. Visible wins. Measurable impact.
        </p>
      </div>

      <!-- Stats -->
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <div class="card p-6 text-center" *ngFor="let s of stats">
          <div class="text-3xl font-bold">{{ s.value }}</div>
          <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ s.label }}</div>
          <div *ngIf="s.helper" class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ s.helper }}</div>
        </div>
      </div>

      <!-- Values / Why us -->
      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <article class="card p-6" *ngFor="let v of values">
          <div class="h-10 w-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path [attr.d]="v.icon"></path>
            </svg>
          </div>
          <h2 class="mt-3 text-lg font-semibold">{{ v.title }}</h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ v.text }}</p>
        </article>
      </div>

      <!-- Story / Timeline -->
      <div class="mt-14 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 class="text-2xl font-semibold">Our story</h2>
          <p class="mt-3 text-slate-600 dark:text-slate-400">
            After a decade building software inside organizations, we saw the same pattern:
            businesses weren’t lacking ideas—they lacked simple, practical systems that turn
            interest into booked work and free teams from repetitive tasks. We started Mustafa Consulting Group
            to deliver exactly that: focused improvements that compound into growth.
          </p>
          <div class="mt-6 card p-6">
            <blockquote class="text-slate-800 dark:text-slate-200">
              “Every project must pay for itself—through more inquiries, better conversion, or time saved.”
            </blockquote>
            <div class="mt-3 text-sm text-slate-500 dark:text-slate-400">— Our operating principle</div>
          </div>
        </div>

        <div>
         <h2 class="text-2xl font-semibold">Our Approach</h2>
<p class="mt-3 text-slate-600 dark:text-slate-400">
  We focus on clarity and speed—helping you see real results quickly without unnecessary complexity.
</p>
<ul class="mt-4 space-y-4">
  <li class="card p-5">
    <div class="font-semibold">1. Understand</div>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
      We learn how your business generates value and what slows it down.
    </p>
  </li>
  <li class="card p-5">
    <div class="font-semibold">2. Simplify</div>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
      We identify the smallest, highest-impact changes that free up time or boost inquiries.
    </p>
  </li>
  <li class="card p-5">
    <div class="font-semibold">3. Execute</div>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
      We deliver clean, practical solutions your team actually uses.
    </p>
  </li>
  <li class="card p-5">
    <div class="font-semibold">4. Iterate</div>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
      We measure, refine, and build on what works—so improvements compound over time.
    </p>
  </li>
</ul>
        </div>
      </div>

      <!-- Credibility band -->
      <div class="mt-14 card p-6">
        <div class="grid gap-4 sm:grid-cols-3 text-center">
          <div class="text-sm">
            <div class="font-semibold">Outcome-Focused</div>
            <div class="mt-1 text-slate-600 dark:text-slate-400">We recommend only what moves revenue or saves time.</div>
          </div>
          <div class="text-sm">
            <div class="font-semibold">Plain Language</div>
            <div class="mt-1 text-slate-600 dark:text-slate-400">No jargon. Clear plans, clear numbers, clear results.</div>
          </div>
          <div class="text-sm">
            <div class="font-semibold">Built to Scale</div>
            <div class="mt-1 text-slate-600 dark:text-slate-400">Start small, iterate monthly, and compound wins.</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-14 card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 class="text-xl font-semibold">Let’s find your fastest path to ROI</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Book a free strategy call—we’ll identify 2–3 improvements that can pay for themselves quickly.
          </p>
        </div>
        <a routerLink="/contact" class="btn-primary">Book a Free Strategy Call</a>
      </div>
    </div>
  </section>
  `
})
export class AboutComponent {
  stats: Stat[] = [
    { value: '10+ years', label: 'Experience delivering business systems' },
    { value: '2–6 weeks', label: 'Typical time to first visible win', helper: 'From kickoff to measurable impact' },
    { value: '100%', label: 'ROI-aligned recommendations' }
  ];

  values: Value[] = [
    {
      title: 'Results over tech',
      text: 'We measure success in inquiries, conversion, and hours saved—not in features shipped.',
      icon: 'M5 12l5 5L20 7'
    },
    {
      title: 'Simple beats complex',
      text: 'We choose the smallest solution that solves the biggest problem and pays back quickly.',
      icon: 'M3 12h18M12 3v18'
    },
    {
      title: 'Build to compound',
      text: 'Deliver a quick win, learn from it, then stack improvements that multiply value.',
      icon: 'M4 14l4 4 8-8'
    }
  ];

  timeline: Step[] = [
  { year: 'Foundation', title: 'Mustafa Consulting Group launches', text: 'After years inside product teams, we start a consultancy focused on measurable business outcomes.' },
    { year: 'First wins', title: 'Lead flow + follow-up pilots', text: 'Clients see faster responses, fewer missed leads, and clearer owner visibility.' },
    { year: 'Scale up', title: 'From pilots to ongoing growth', text: 'Monthly iteration keeps compounding what works—more inquiries, less busywork.' }
  ];
}
