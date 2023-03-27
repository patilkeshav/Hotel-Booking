import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocationSubject = new BehaviorSubject<string>('');

  setSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }

  getSelectedLocation() {
    return this.selectedLocationSubject.asObservable();
  }
}
 

