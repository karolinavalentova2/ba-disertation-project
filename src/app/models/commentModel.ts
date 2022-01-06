import {UserModel} from "./userModel";
import {TaskModel} from "./taskModel";

export interface CommentModel {
  id: string | number;
  task: TaskModel | string;
  author: UserModel;
  created: string;
  description: string;
  active: boolean;
}
