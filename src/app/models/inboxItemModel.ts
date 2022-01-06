import {UserModel} from "./userModel";
import {TaskModel} from "./taskModel";
import {ProjectModel} from "./projectModel";
import {TeamModel} from "./teamModel";

export interface InboxItemModel {
  id: string | number;
  author: UserModel;
  type: {
    id: string,
    name: string
  };
  task: TaskModel;
  project?: ProjectModel;
  team?: TeamModel;
  isRead: boolean;
  created: string;
}
