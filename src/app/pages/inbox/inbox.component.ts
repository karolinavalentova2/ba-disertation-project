import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.doSetPageTitle("Inbox");
  }

}
