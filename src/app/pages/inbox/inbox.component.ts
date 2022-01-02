import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {MockInboxItem} from "../../models/mockData";
import {InboxItemModel} from "../../models/inboxItemModel";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  inboxItems: InboxItemModel[] = [...MockInboxItem];

  renderItems: Array<{
    date: string,
    items: InboxItemModel[]
  }> = [];

  ngOnInit(): void {
    this.navigationService.doSetPageTitle("Inbox");

    const tmpItems = Object.create({});
    this.inboxItems.forEach((item) => {
      const { created } = item;
      if(tmpItems.hasOwnProperty(item.created)) {
        tmpItems[created].push(item)
      } else {
        tmpItems[created] = [];
        tmpItems[created].push(item)
      }

    })

    Object.keys(tmpItems).forEach(created => {
      this.renderItems.push({
        date: created,
        items: tmpItems[created]
      })
    })
  }
}

