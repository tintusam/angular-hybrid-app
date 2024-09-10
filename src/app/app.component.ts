import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpgradeModule],
  template: `
    <h1>Angular 18 Wrapper App</h1>
    <div ng-view></div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private upgrade: UpgradeModule,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.upgrade.bootstrap(document.body, ['legacyApp']);
    }
  }
}