import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [UpgradeModule]
})
export class LegacyAppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['legacyApp'], { strictDi: true });
  }
}