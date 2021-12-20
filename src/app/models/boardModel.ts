import {TaskModel} from "./taskModel";

export interface BoardModel {
  name: string;
  id: string | number;
  tasks: TaskModel[];
}
