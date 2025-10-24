import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';

type Metric = { label: string; value: string; helper?: string };
type Study = {
  id: string;
  sector: 'Service' | 'Retail' | 'Professional' | 'Logistics';
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  potentialResults: string[];
  metrics: Metric[];
};

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  template: `
  <section class="section">
    <div class="container max-w-6xl">
      <!-- Hero -->
      <div class="text-center">
        <span class="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-medium">Example Results</span>
        <h1 class="mt-4 text-4xl font-bold">What Our Systems Can Achieve</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          The following examples show the type of measurable growth and efficiency our consulting work is designed to deliver.
          These are based on common business scenarios — not specific clients — illustrating what’s possible when systems work seamlessly.
        </p>
      </div>

      <!-- KPI tiles -->
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <div class="card p-6 text-center">
          <div class="text-3xl font-bold">+40%</div>
          <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">Typical increase in inquiries</div>
        </div>
        <div class="card p-6 text-center">
          <div class="text-3xl font-bold">-50%</div>
          <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">Reduction in admin time</div>
        </div>
        <div class="card p-6 text-center">
          <div class="text-3xl font-bold">+15%</div>
          <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">Improvement in conversion</div>
        </div>
      </div>

      <!-- Filters -->
      <div class="mt-10 flex flex-wrap items-center gap-2">
        <button
          *ngFor="let f of filters()"
          class="px-3 py-1.5 rounded-full text-sm border transition"
          [ngClass]="activeFilter() === f
            ? 'bg-brand-600 text-white border-transparent'
            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:border-brand-400'"
          (click)="setFilter(f)">
          {{ f }}
        </button>
        <div class="ml-auto text-xs text-slate-500 dark:text-slate-400">{{ filtered().length }} example(s)</div>
      </div>

      <!-- Example cards -->
      <div class="mt-6 grid gap-6">
        <article class="card p-6" *ngFor="let s of filtered()">
          <div class="flex items-center gap-2 text-xs">
            <span class="inline-flex items-center rounded-full bg-brand-100 text-brand-700 px-2.5 py-0.5 font-medium">{{ s.sector }}</span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500 dark:text-slate-400">Illustrative scenario</span>
          </div>
          <h2 class="mt-3 text-xl font-semibold">{{ s.title }}</h2>
          <p class="mt-2 text-slate-600 dark:text-slate-400">{{ s.summary }}</p>

          <div class="mt-4 grid sm:grid-cols-2 gap-4">
            <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
              <div class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Challenge</div>
              <p class="text-sm text-slate-700 dark:text-slate-300">{{ s.challenge }}</p>
            </div>
            <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
              <div class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Approach</div>
              <p class="text-sm text-slate-700 dark:text-slate-300">{{ s.approach }}</p>
            </div>
          </div>

          <!-- Potential Results -->
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              *ngFor="let r of s.potentialResults"
              class="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
              {{ r }}
            </span>
          </div>

          <!-- Metrics -->
          <div class="mt-4 grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-slate-50 dark:bg-slate-900/50 p-4" *ngFor="let m of s.metrics">
              <div class="text-2xl font-bold">{{ m.value }}</div>
              <div class="text-xs mt-1 text-slate-600 dark:text-slate-400">{{ m.label }}</div>
              <div *ngIf="m.helper" class="text-[11px] mt-1 text-slate-500 dark:text-slate-400">{{ m.helper }}</div>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-12 card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 class="text-xl font-semibold">See what’s possible for your business</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Book a free strategy call—we’ll identify 2–3 improvements that can bring measurable ROI fast.
          </p>
        </div>
        <a routerLink="/contact" class="btn-primary">Book a Free Strategy Call</a>
      </div>
    </div>
  </section>
  `
})
export class CaseStudiesComponent {
  readonly allFilters = ['All', 'Service', 'Retail', 'Professional', 'Logistics'] as const;
  activeFilter = signal<(typeof this.allFilters)[number]>('All');
  filters = signal<(typeof this.allFilters)[number][]>([...this.allFilters]);
  setFilter(f: (typeof this.allFilters)[number]) { this.activeFilter.set(f); }

  studies = signal<Study[]>([
    {
      id: 'svc-leads',
      sector: 'Service',
      title: 'Service Company — Lead Capture & Instant Follow-up',
      summary: 'A small service business struggled to keep up with web inquiries, losing potential clients daily.',
      challenge: 'Leads arrived through multiple forms and emails with no system to ensure follow-up.',
      approach: 'Unify all lead sources into one dashboard and automate instant notifications to the right team member.',
      potentialResults: ['Higher conversion', 'Faster replies', 'No missed leads'],
      metrics: [
        { value: '3×', label: 'Potential conversion rate increase', helper: 'Typical for improved response time' },
        { value: '-60%', label: 'Leads missed', helper: 'When notifications are instant' },
        { value: '<15m', label: 'Average first response time' }
      ]
    },
    {
      id: 'retail-stock',
      sector: 'Retail',
      title: 'Retail Business — Inventory Visibility & Accuracy',
      summary: 'A retail shop faced frequent stockouts and inconsistent product availability online.',
      challenge: 'Inventory updates were manual, leading to mismatched quantities across systems.',
      approach: 'Introduce a simple daily sync between in-store and online inventory for real-time accuracy.',
      potentialResults: ['Fewer stockouts', 'Better customer experience'],
      metrics: [
        { value: '+25%', label: 'Potential online sales growth' },
        { value: '-40%', label: 'Stock complaints' },
        { value: 'Daily', label: 'Team update cadence' }
      ]
    },
    {
      id: 'pro-scheduling',
      sector: 'Professional',
      title: 'Professional Office — Automated Scheduling & Reminders',
      summary: 'Office staff spent hours confirming appointments and chasing missed calls.',
      challenge: 'Manual reminders caused high no-show rates and scheduling chaos.',
      approach: 'Automate appointment confirmations and create a real-time “tomorrow view.”',
      potentialResults: ['Time saved', 'Better show rates'],
      metrics: [
        { value: '-40+ hrs/mo', label: 'Team time saved' },
        { value: '-25%', label: 'Fewer missed appointments' },
        { value: '+15%', label: 'Capacity increase' }
      ]
    },
    {
      id: 'logistics-visibility',
      sector: 'Logistics',
      title: 'Logistics Firm — Real-Time Dispatch Visibility',
      summary: 'Dispatch relied on phone updates and spreadsheets, delaying responses to issues.',
      challenge: 'Managers couldn’t see live job status and missed early warning signs.',
      approach: 'Build a simple shared dashboard for job tracking, color-coded by urgency.',
      potentialResults: ['Faster decisions', 'Fewer status calls'],
      metrics: [
        { value: '+12pt', label: 'On-time delivery improvement' },
        { value: '-30%', label: 'Status-check calls' },
        { value: 'Live', label: 'Operations visibility' }
      ]
    }
  ]);

  filtered = computed(() => {
    const f = this.activeFilter();
    const list = this.studies();
    return f === 'All' ? list : list.filter(s => s.sector === f);
  });
}
