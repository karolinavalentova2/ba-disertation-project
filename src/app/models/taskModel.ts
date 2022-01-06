import {UserModel} from "./userModel";
import {BoardModel} from "./boardModel";
import {CommentModel} from "./commentModel";

export interface TaskModel {
  id: string;
  column?: BoardModel;
  // subTasks: Array<TaskModel> | [];
  author?: UserModel;
  assignedTo: UserModel | null;
  name: string;
  createdAt: string;
  dueDate: string | null;
  description: string;
  active: boolean;
  trackedTime: number;
  completed: boolean;
  modified: string;
  columnIndex: number;
  subTasks: TaskModel[];
  contributors: Array<{
    name: string,
    id: string | number
    imagePath: string;
  }>;

  totalTrackedSubtaskTime?: number,
  isLocalTaskOnly?: boolean;
  comments: Array<CommentModel>
  author_fk?: string;
}
