import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
  <section class="section">
    <div class="container">
      <h1 class="text-3xl font-bold">Clear Pricing — Designed to Pay for Itself</h1>
      <p class="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
        Pick a starting point. We’ll make sure the value is obvious and measurable.
      </p>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <div class="card p-6">
          <h3 class="text-xl font-semibold">Quick Growth Audit</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">1-week assessment to find the biggest opportunities.</p>
          <div class="mt-4 text-3xl font-bold">$750–$1,250</div>
          <ul class="mt-4 text-sm list-disc list-inside space-y-1">
            <li>Lead flow & follow-up review</li>
            <li>Top 3 system improvements</li>
            <li>Action plan with ROI estimate</li>
          </ul>
        </div>
        <div class="card p-6 border-brand-300">
          <h3 class="text-xl font-semibold">Pilot Improvement</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">A focused project that delivers a visible win.</p>
          <div class="mt-4 text-3xl font-bold">$3,000–$7,000</div>
          <ul class="mt-4 text-sm list-disc list-inside space-y-1">
            <li>Lead capture or follow-up automation</li>
            <li>Simple dashboard/reporting</li>
            <li>Training & handoff</li>
          </ul>
        </div>
        <div class="card p-6">
          <h3 class="text-xl font-semibold">Ongoing Improvements</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Monthly iteration to keep growth compounding.</p>
          <div class="mt-4 text-3xl font-bold">$1,000–$3,000/mo</div>
          <ul class="mt-4 text-sm list-disc list-inside space-y-1">
            <li>Prioritized backlog</li>
            <li>Monthly reporting</li>
            <li>Responsive support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `
})
export class PricingComponent {}
