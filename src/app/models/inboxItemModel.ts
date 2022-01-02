import {UserModel} from "./userModel";

export interface InboxItemModel {
  id: string | number;
  author: UserModel;
  type: string;
  task: string;
  project?: string;
  team?: string;
  isRead: boolean;
  created: string;
}
