import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <!-- HERO -->
  <section class="section">
    <div class="container max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span class="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs font-medium">Lucentive</span>
        <h1 class="mt-4 text-5xl font-bold leading-tight text-slate-900 dark:text-white">
          Clarity that Compounds
        </h1>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          We simplify your systems so growth becomes inevitable—more inquiries, faster responses, clearer decisions.
          Every engagement is designed to pay for itself.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a routerLink="/contact" class="btn-primary">Find Your Growth Opportunity</a>
          <a routerLink="/services" class="btn-ghost">How We Help</a>
        </div>
        <p class="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Outcome over jargon. Measurable improvements or we don’t recommend it.
        </p>
      </div>

      <!-- Right: quick credibility tiles -->
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="card p-5 text-center">
          <div class="text-3xl font-bold">+40%</div>
          <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Typical lift in inquiries</div>
        </div>
        <div class="card p-5 text-center">
          <div class="text-3xl font-bold">-50%</div>
          <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Admin time reduced</div>
        </div>
        <div class="card p-5 text-center">
          <div class="text-3xl font-bold">+15%</div>
          <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Conversion improvement</div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUE PROPS -->
  <section class="section bg-slate-50 dark:bg-slate-900/40">
    <div class="container max-w-6xl">
      <h2 class="text-2xl font-semibold text-center">Why clients choose Lucentive</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article class="card p-6">
          <h3 class="font-semibold">Simplify Complexity</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Remove friction from everyday operations so teams can focus on customers.
          </p>
        </article>
        <article class="card p-6">
          <h3 class="font-semibold">Capture More Inquiries</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            No leaks. Prospects are acknowledged instantly and routed to the right person.
          </p>
        </article>
        <article class="card p-6">
          <h3 class="font-semibold">Reduce Busywork</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Light-touch automation saves hours each week without adding complexity.
          </p>
        </article>
        <article class="card p-6">
          <h3 class="font-semibold">Measure What Matters</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Clear metrics show what’s working—so wins compound month after month.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- RESULTS HIGHLIGHTS -->
  <section class="section">
    <div class="container max-w-6xl">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-2xl font-semibold">Example results we aim for</h2>
        <p class="mt-2 text-slate-600 dark:text-slate-400 text-sm">
          Illustrative scenarios based on common business challenges (not client-specific claims).
        </p>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <article class="card p-6">
          <div class="text-xs font-medium text-brand-700">Service • Lead Flow</div>
          <h3 class="mt-2 font-semibold">Faster responses, higher conversion</h3>
          <ul class="mt-3 text-sm list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Unified intake, instant alerts</li>
            <li>Auto-acknowledgement to prospects</li>
            <li class="font-medium">Potential: 3× more inquiries converted</li>
          </ul>
        </article>

        <article class="card p-6">
          <div class="text-xs font-medium text-brand-700">Retail • Operations</div>
          <h3 class="mt-2 font-semibold">Real-time availability</h3>
          <ul class="mt-3 text-sm list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Daily sync across channels</li>
            <li>Clear visibility for the team</li>
            <li class="font-medium">Potential: +25% online sales</li>
          </ul>
        </article>

        <article class="card p-6">
          <div class="text-xs font-medium text-brand-700">Professional • Scheduling</div>
          <h3 class="mt-2 font-semibold">Less no-shows, more capacity</h3>
          <ul class="mt-3 text-sm list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Automated reminders & confirmations</li>
            <li>“Tomorrow view” for staff</li>
            <li class="font-medium">Potential: -40+ hrs/mo admin time</li>
          </ul>
        </article>
      </div>

      <div class="mt-6 text-center">
        <a routerLink="/case-studies" class="btn-ghost">See more example results</a>
      </div>
    </div>
  </section>

  <!-- PROCESS STRIP -->
  <section class="section bg-slate-50 dark:bg-slate-900/40">
    <div class="container max-w-6xl">
      <h2 class="text-2xl font-semibold text-center">A simple process that respects your time</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-4">
        <div class="card p-6">
          <div class="text-sm font-medium text-brand-700">1. Understand</div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Clarify goals, bottlenecks, and ROI targets.</p>
        </div>
        <div class="card p-6">
          <div class="text-sm font-medium text-brand-700">2. Plan</div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Smallest solution, biggest near-term impact.</p>
        </div>
        <div class="card p-6">
          <div class="text-sm font-medium text-brand-700">3. Deliver</div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Visible win first—lead flow, follow-ups, or a key workflow.</p>
        </div>
        <div class="card p-6">
          <div class="text-sm font-medium text-brand-700">4. Compound</div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Measure, improve, and stack what works.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST BAND -->
  <section class="section">
    <div class="container max-w-6xl">
      <div class="grid gap-6 md:grid-cols-3">
        <div class="card p-6 text-sm">
          <div class="font-semibold">Outcome-Focused</div>
          <p class="mt-1 text-slate-600 dark:text-slate-400">We recommend only what moves revenue or saves time.</p>
        </div>
        <div class="card p-6 text-sm">
          <div class="font-semibold">Plain Language</div>
          <p class="mt-1 text-slate-600 dark:text-slate-400">Clear plans, clear numbers, no jargon.</p>
        </div>
        <div class="card p-6 text-sm">
          <div class="font-semibold">Built to Scale</div>
          <p class="mt-1 text-slate-600 dark:text-slate-400">Start small now; compound wins every month.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container max-w-6xl">
      <div class="card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 class="text-xl font-semibold">Let’s simplify your growth</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Book a short strategy call. We’ll identify 2–3 improvements that can pay for themselves fast.
          </p>
        </div>
        <a routerLink="/contact" class="btn-primary">Book a Free Strategy Call</a>
      </div>
    </div>
  </section>
  `
})
export class HomeComponent {}
