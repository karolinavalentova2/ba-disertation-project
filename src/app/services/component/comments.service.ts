import { Injectable } from '@angular/core';
import {TeamModel} from "../../models/teamModel";
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";
import {CommentModel} from "../../models/commentModel";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService) {}

  /**
   * @description Returns an array of comments by a given task id;
   * @param taskId - Id of the task
   */
  public async doRequestCommentsByTaskId(taskId: string) {
    const res = await this.fetchService.doMakeSyncRequest(`/comment/byTaskId/${taskId}`, "get", {}, {},);
    const tmpArr: CommentModel[] = []
    res.forEach((comment: any) => {
      const convertedEntry = this.modelConverter.doConvertResponseToModel("COMMENT", comment);
      tmpArr.push((convertedEntry as CommentModel))
    })
    return tmpArr;
  }
}
