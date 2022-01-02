import {UserModel} from "./userModel";

export interface TaskModel {
  author: UserModel;
  id: string | number;
  createdAt: string;
  name: string;
  assignedTo: UserModel | null;
  dueDate: string | null;
  trackedTime: number;
  contributors: Array<{
    name: string,
    id: string | number
    imagePath: string;
  }>;
  description: string;
  subTasks: Array<TaskModel>;
  totalTrackedSubtaskTime?: number,
  comments: Array<{
    author: UserModel;
    id: string | number;
    description: string;
    created: string;
  }>;
  subtaskOf?: number | string;
  isLocalTaskOnly?: boolean;
  completed: boolean;
  active: boolean;
  modified: string;
  columnIndex: number;
}
