import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { LegacyComponentComponent } from './legacy-component.component';

export const legacyAppModule = angular.module('legacyApp', [])
  .directive(
    'appLegacyComponent',
    downgradeComponent({ component: LegacyComponentComponent }) as angular.IDirectiveFactory
  );