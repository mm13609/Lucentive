import { Routes } from '@angular/router';

export const routes: Routes = [
 {
  path: '',
  loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  data: {
    title: 'Mustafa Consulting Group — Clarity that Compounds',
    description: 'Mustafa Consulting Group simplifies systems so growth becomes inevitable—more inquiries, faster responses, clearer decisions. Every engagement is designed to pay for itself.'
  }
},
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: {
  title: 'Services that Drive Growth | Mustafa Consulting Group',
      description: 'Lead systems, customer engagement, automation, and performance dashboards — everything focused on growth and ROI.'
    }
  },
  { path: 'case-studies', loadComponent: () => import('./pages/case-studies/case-studies.component').then(m => m.CaseStudiesComponent),
    data: {
  title: 'Profit Stories & Results | Mustafa Consulting Group',
      description: 'Examples showing how better systems lead to more inquiries, faster responses, and higher revenue.'
    }
  },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    data: {
  title: 'Clear Pricing & ROI-Focused Packages | Mustafa Consulting Group',
      description: 'From quick audits to ongoing improvements — pick a package designed to pay for itself through growth and efficiency.'
    }
  },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: {
  title: 'About Mustafa Consulting Group | We Focus on Your Bottom Line',
      description: 'We recommend only what creates measurable value — more inquiries, higher conversion, or time saved.'
    }
  },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: {
  title: 'Let\'s Find Your Growth Opportunity | Contact Mustafa Consulting Group',
      description: 'Book a free strategy session. We’ll identify 2–3 improvements that can bring more inquiries or save hours each week.'
    }
  },
  { path: '**', redirectTo: '' }
];
