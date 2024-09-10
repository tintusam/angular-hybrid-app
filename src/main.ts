import * as angular from 'angular';
import 'angular-route';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { setAngularJSGlobal } from '@angular/upgrade/static';

// Set AngularJS global for upgrade module
setAngularJSGlobal(angular);

// Define the legacyApp module with ngRoute dependency
angular.module('legacyApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider: any) {
    $routeProvider
      .when('/', {
        template: '<h2>AngularJS View</h2><p>This is rendered by AngularJS</p>'
      })
      // Add more routes as needed
  }]);

bootstrapApplication(AppComponent, {
  providers: [UpgradeModule]
}).catch(err => console.error(err));
