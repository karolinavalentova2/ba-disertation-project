import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private pageTitleSubject = new Subject<string>()
  constructor() { }

  public doSetPageTitle(pageTitle: string): void {
    this.pageTitleSubject.next(pageTitle);
    console.log(pageTitle)
  }

  public doObservePageTitleChanges(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}
