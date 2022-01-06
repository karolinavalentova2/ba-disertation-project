import {Injectable} from '@angular/core';
import {TaskModel} from "../../models/taskModel";
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService) {}

  /**
   * @description Returns a task by its id;
   * @param taskId
   */
  public async doRequestTaskById(taskId: string) {
    const res = await this.fetchService.doMakeSyncRequest(`task/${taskId}`, "get", {}, {});
    return this.modelConverter.doConvertResponseToModel("TASK", res);
  }

  /**
   * @description Fetches all the tasks linked to a board by the board id
   * @param boardId - The id of the board to fetch the tasks for
   * @return Promise<TaskModel[]>
   */
  public async doRequestAllTasksByBoardId(boardId: string): Promise<TaskModel[]> {
    const res = await this.fetchService.doMakeSyncRequest(`task/byBoardId/${boardId}`, "get", {}, {});
    const tmpArr: TaskModel[] = []
    res.forEach((task: any) => {
      const convertedEntry = this.modelConverter.doConvertResponseToModel("TASK", task);
      tmpArr.push((convertedEntry as TaskModel))
    })
    return tmpArr;
  }

  /**
   * @description Saves a new task
   * @param taskData - The task to be saved
   */
  public async doSaveNewTask(taskData: TaskModel) {
    const { author_fk, name, active, column, completed, description, columnIndex, createdAt, modified } = taskData
    const tmpTaskData = {
      author_fk, name, active, column_fk: column?.id, completed, description, modified, created: createdAt, columnIndex
    }

    //TODO: Do something with the response
    const res = await this.fetchService.doMakeSyncRequest(`task`, "post", {}, tmpTaskData);
  }

  /**
   * @description Updates a task by its given id
   * @param taskId - The id of the task
   * @param payload - An object with the changed values
   */
  public async doUpdateTask(taskId: string, payload: Partial<TaskModel>) {
    //TODO: Check for errors on the response
    return await this.fetchService.doMakeSyncRequest(`task/${taskId}`, "put", {}, payload);
  }
}
