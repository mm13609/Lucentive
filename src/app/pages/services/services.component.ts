import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Service = {
  icon: string;          // inline SVG path
  title: string;
  blurb: string;
  bullets: string[];
  chips: string[];
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="section">
    <div class="container max-w-6xl">
      <!-- Header -->
      <div class="text-center">
        <span class="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-medium">Services</span>
        <h1 class="mt-4 text-4xl font-bold">Services that Drive Measurable Growth</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our work is designed to bring you more inquiries, reduce busywork, and improve revenue.
          We prioritize fast wins that pay for themselves.
        </p>
      </div>

      <!-- Services grid -->
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article class="card p-6" *ngFor="let s of services">
          <div class="flex items-start gap-4">
            <div class="h-12 w-12 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path [attr.d]="s.icon"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-xl font-semibold">{{ s.title }}</h2>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {{ s.blurb }}
              </p>
              <ul class="mt-3 text-sm list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li *ngFor="let b of s.bullets">{{ b }}</li>
              </ul>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  *ngFor="let c of s.chips"
                  class="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
                  {{ c }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Process -->
      <div class="mt-14">
        <h2 class="text-2xl font-semibold text-center">How We Work</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-4">
          <div class="card p-6">
            <div class="text-sm font-medium text-brand-700">Step 1</div>
            <h3 class="mt-1 font-semibold">Free Strategy Call</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Understand goals, bottlenecks, and the quickest ROI wins.</p>
          </div>
          <div class="card p-6">
            <div class="text-sm font-medium text-brand-700">Step 2</div>
            <h3 class="mt-1 font-semibold">Action Plan</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Simple scope, timeline, and success metrics you can agree with.</p>
          </div>
          <div class="card p-6">
            <div class="text-sm font-medium text-brand-700">Step 3</div>
            <h3 class="mt-1 font-semibold">Pilot Improvement</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Deliver a visible win fast—lead flow, follow-ups, or a key workflow.</p>
          </div>
          <div class="card p-6">
            <div class="text-sm font-medium text-brand-700">Step 4</div>
            <h3 class="mt-1 font-semibold">Iterate & Grow</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Review results monthly; keep compounding what works.</p>
          </div>
        </div>
      </div>

      <!-- ROI promise -->
      <div class="mt-14 card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 class="text-xl font-semibold">Our ROI Promise</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Every project must pay for itself—through more inquiries, better conversion, or time saved.
          </p>
        </div>
        <a routerLink="/contact" class="btn-primary">Book a Free Strategy Call</a>
      </div>

      <!-- FAQ -->
      <div class="mt-14 max-w-3xl mx-auto">
        <h2 class="text-2xl font-semibold text-center">FAQ</h2>
        <div class="mt-6 space-y-3">
          <details class="card p-5">
            <summary class="font-medium cursor-pointer">How fast can we see results?</summary>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Many clients see impact within 2–6 weeks from a focused pilot (e.g., better lead capture or faster follow-ups).
            </p>
          </details>
          <details class="card p-5">
            <summary class="font-medium cursor-pointer">Do you work with our existing tools?</summary>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Yes. We start with what you already have and improve the gaps—no unnecessary rebuilds.
            </p>
          </details>
          <details class="card p-5">
            <summary class="font-medium cursor-pointer">What makes your work “pay for itself”?</summary>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              We prioritize improvements that either increase inquiries/conversion or save meaningful team hours.
              If it won’t move the needle, we won’t recommend it.
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Lead Capture & Instant Response',
      blurb: 'Capture every inquiry, route it to the right person, and respond while interest is highest.',
      bullets: [
        'Frictionless forms & intake flows that don’t leak leads',
        'Instant notifications so your team replies immediately',
        'Auto-acknowledgement so prospects feel taken care of'
      ],
      chips: ['Higher conversion', 'Faster replies', 'No missed leads'],
      icon: 'M3 4h18v2H3V4zm3 5h12v2H6V9zm-3 5h18v2H3v-2zm3 5h12v2H6v-2z'
    },
    {
      title: 'Customer Engagement & Follow-ups',
      blurb: 'Keep your pipeline full with friendly reminders, confirmations, and simple re-order prompts.',
      bullets: [
        'Appointment reminders that reduce no-shows',
        'Post-visit follow-ups that drive repeat business',
        'Review requests to build social proof'
      ],
      chips: ['More repeat sales', 'Better show rates'],
      icon: 'M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z'
    },
    {
      title: 'Workflow & Process Automation',
      blurb: 'Remove repetitive tasks so your team can serve more customers—without adding headcount.',
      bullets: [
        'Fewer manual steps & fewer errors',
        'Clear hand-offs and notifications',
        'Faster delivery from inquiry to invoice'
      ],
      chips: ['Serve more clients', 'Time saved'],
      icon: 'M10 3h4v2h-4V3zm-7 7h8v2H3v-2zm10 0h8v2h-8v-2zM3 17h4v2H3v-2zm6 0h12v2H9v-2z'
    },
    {
      title: 'Performance Dashboards',
      blurb: 'See what’s working, what’s not, and where money is left on the table.',
      bullets: [
        'Leads, response time, and conversion at a glance',
        'Simple reports for owners and managers',
        'Weekly insights that drive action'
      ],
      chips: ['Better decisions', 'Clear ROI'],
      icon: 'M3 13h2a7 7 0 0 1 14 0h2a9 9 0 0 0-18 0zm7 7h4v-6h-4v6z'
    }
  ];
}
