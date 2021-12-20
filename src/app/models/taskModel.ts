export interface TaskModel {
  author: string;
  id: string | number;
  createdAt: string;
  name: string;
  assignedTo: string | number;
  dueDate: string;
  trackedTime: string;
  contributors: Array<{name: string, id: string | number}>;
  description: string;
  subTasks: Array<TaskModel>;
  comments: Array<any>;
  subtaskOf?: number | string;
  isLocalTaskOnly?: boolean;
}
