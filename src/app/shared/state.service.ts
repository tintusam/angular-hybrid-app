import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateSubject = new BehaviorSubject<string>('Initial State');
  state$ = this.stateSubject.asObservable();

  updateState(newState: string) {
    this.stateSubject.next(newState);
  }
}
