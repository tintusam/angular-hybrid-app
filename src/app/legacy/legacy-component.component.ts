import { Component } from '@angular/core';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-legacy-component',
  template: `
    <h2>Legacy AngularJS Component</h2>
    <p>Shared state: {{ sharedState }}</p>
  `
})
export class LegacyComponentComponent {
  sharedState: any;

  constructor(private stateService: StateService) {
    this.stateService.state$.subscribe(state => {
      this.sharedState = state;
    });
  }
}