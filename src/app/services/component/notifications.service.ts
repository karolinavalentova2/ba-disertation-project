import { Injectable } from '@angular/core';
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";
import {NotificationModel} from "../../models/notificationModel";
import {AuthService} from "../api/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService, private authService: AuthService) {}

  /**
   * @description Requests all the notifications for the logged-in user
   */
  public async doRequestNotifications() {
    const loggedUser = this.authService.doReturnLoggedUser();
    const res = await this.fetchService.doMakeSyncRequest(`/notification/byUserId/${loggedUser.id}`, "get", {}, {},);
    const tmpArr: NotificationModel[] = []
    res.forEach((notification: any) => {
      const convertedEntry = this.modelConverter.doConvertResponseToModel("NOTIFICATION", notification);
      tmpArr.push((convertedEntry as NotificationModel))
    })
    return tmpArr;
  }
}
