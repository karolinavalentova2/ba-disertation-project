import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Subscription} from "rxjs";

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
  }

  ngOnDestroy(): void {
    this.pageTitleObserver?.unsubscribe();
  }


}
