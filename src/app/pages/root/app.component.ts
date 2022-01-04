import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../../services/component/navigation.service";
import {Subscription} from "rxjs";
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = '';

  private pageTitleObserver?: Subscription;
  constructor(private navigationService: NavigationService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.pageTitleObserver = this.navigationService.doObservePageTitleChanges().subscribe((newTitle) => {
      this.title = newTitle;
      //TODO: Remember this and get rid of it
      this.cdr.detectChanges();
    })
    moment.locale('en-GB');
  }

  ngOnDestroy(): void {
    this.pageTitleObserver?.unsubscribe();
  }


}
