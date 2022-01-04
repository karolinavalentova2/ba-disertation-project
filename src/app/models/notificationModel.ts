import {UserModel} from "./userModel";
import {TaskModel} from "./taskModel";
import {NotificationTypeModel} from "./notificationTypeModel";

export interface NotificationModel {
  id: string | number;
  author: UserModel;
  type: NotificationTypeModel;
  task: TaskModel;
  isRead: boolean;
  active: boolean;
  created: string;
}
