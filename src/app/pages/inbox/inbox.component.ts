import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/component/navigation.service";
import {InboxItemModel} from "../../models/inboxItemModel";
import {NotificationsService} from "../../services/component/notifications.service";
import {NotificationModel} from "../../models/notificationModel";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private navigationService: NavigationService, private notificationsService: NotificationsService) { }

  renderItems: Array<{
    date: string,
    items: InboxItemModel[]
  }> = [];

  ngOnInit(): void {
    this.navigationService.doSetPageTitle("Inbox");
    this.notificationsService.doRequestNotifications().then((notifications) => {
      this.doBuildNotificationList(notifications);
    })
  }

  private doBuildNotificationList(notifications: NotificationModel[]) {
    const tmpItems = Object.create({});
    notifications.forEach((item) => {
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

