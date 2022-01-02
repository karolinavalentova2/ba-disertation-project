import {TaskModel} from "./taskModel";
import {UserModel} from "./userModel";

export interface BoardModel {
  id: string | number;
  name: string;
  tasks: TaskModel[];
  project: string;
  author: UserModel;
  created: string;
  active: boolean;
  boardIndex: number;
}
