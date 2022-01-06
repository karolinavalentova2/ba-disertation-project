import {UserModel} from "./userModel";
import {ProjectModel} from "./projectModel";
import {TaskModel} from "./taskModel";

export interface BoardModel {
  id: string;
  project: ProjectModel;
  author?: UserModel;
  name: string;
  active: boolean;
  created: string;
  boardIndex: number;

  tasks: Array<TaskModel>;
  author_fk?: string;
}
