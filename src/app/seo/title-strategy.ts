import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title, private readonly meta: Meta) { super(); }

  override updateTitle(snapshot: RouterStateSnapshot) {
    const deepest = this.getDeepestRoute(snapshot.root);
    const data = deepest?.data || {};
    const t = this.buildTitle(snapshot as any);
    this.title.setTitle(t ?? 'Lucentive');

    if (data['description']) {
      this.meta.updateTag({ name: 'description', content: data['description'] });
      this.meta.updateTag({ property: 'og:description', content: data['description'] });
    }
    if (data['title']) {
      this.meta.updateTag({ property: 'og:title', content: data['title'] });
      this.meta.updateTag({ name: 'twitter:title', content: data['title'] });
    }
  }

  private getDeepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (route.firstChild) route = route.firstChild;
    return route;
  }
}
