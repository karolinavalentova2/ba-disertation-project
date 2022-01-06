import {UserModel} from "./userModel";
import {TaskModel} from "./taskModel";
import {NotificationTypeModel} from "./notificationTypeModel";
import {ProjectModel} from "./projectModel";

export interface NotificationModel {
  id: string;
  author: UserModel;
  type: NotificationTypeModel;
  project: ProjectModel;
  task: TaskModel;
  isRead: boolean;
  active: boolean;
  created: string;
}
