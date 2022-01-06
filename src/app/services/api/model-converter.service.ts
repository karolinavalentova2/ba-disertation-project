import { Injectable } from '@angular/core';
import {DataModel} from "../../models/apiRoutes";
import {UserModel} from "../../models/userModel";
import {TeamModel} from "../../models/teamModel";
import {BoardModel} from "../../models/boardModel";
import {TaskModel} from "../../models/taskModel";
import {CommentModel} from "../../models/commentModel";
import {ProjectModel} from "../../models/projectModel";
import {NotificationModel} from "../../models/notificationModel";

@Injectable({
  providedIn: 'root'
})
export class ModelConverterService {

  constructor() { }

  /**
   * @description Converts a given object into a typed object defined in the call
   * @param modelType - The model of to be converted to
   * @param response - The object to be converted to
   */
  public doConvertResponseToModel(modelType: DataModel, response: any) {
    switch (modelType) {
      case "USER": {
        const { id, email, verificationCode, imagePath, created, active, name } = response;
        const tmpUser: UserModel = {
          id,
          email,
          verificationCode,
          active,
          imagePath,
          created,
          name,
          password: null,
        }
        return tmpUser;
      }
      case "TEAM": {
        const { id, author_fk, name, created, active, author, projects } = response;
        const tmpTeam: TeamModel = {
          id, author, name, created, active, projects
        }
        return tmpTeam;
      }
      case "BOARD_COLUMN": {
        const { id, name, active, created, boardIndex, author, project, tasks} = response;
        const tmpBoard: BoardModel = {
          id, name, active, created, boardIndex, author, project, tasks
        }
        return tmpBoard;
      }
      case "TASK": {
        const { id, name, created, dueDate, description, active, timeTracked, completed, modified, columnIndex, author, assignedTo, comments, contributors, subTasks } = response;
        const tmpTask: TaskModel = {
          id, name, active, author, dueDate, description, completed , modified, columnIndex, assignedTo, trackedTime: timeTracked, comments, contributors, createdAt: created, subTasks
        }
        return tmpTask;
      }
      case "COMMENT": {
        const { id, task_fk, author, task, author_fk, created, description, active } = response;
        const tmpComment: CommentModel = {
          id, active, author, created, description, task: task || task_fk
        }
        return tmpComment;
      }
      case "PROJECT": {
        const { id, team_fk, author_fk, created, active, name } = response;
        const tmpProject: ProjectModel = {
          id, active, name, created
        }
        return tmpProject;
      }
      case "NOTIFICATION": {
        const { id, author, created, task, isRead, type, project } = response;
        const tmpNotification: NotificationModel = {
          id, active: isRead, author, created, task, isRead, type, project
        }
        return tmpNotification;
      }
      default: {
        return;
      }
    }
  }
}
