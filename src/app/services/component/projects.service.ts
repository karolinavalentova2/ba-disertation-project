import { Injectable } from '@angular/core';
import {TeamModel} from "../../models/teamModel";
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";
import {ProjectModel} from "../../models/projectModel";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService) {}

  /**
   * @description Fetches project by a given project id
   * @param taskId - The id of the project
   */
  public async doRequestProjectById(taskId: string) {
    const res = await this.fetchService.doMakeSyncRequest(`project/${taskId}`, "get", {}, {});
    if(res[0]) {
      const project = this.modelConverter.doConvertResponseToModel("PROJECT", res[0]);

      if (project) {
        return (project as ProjectModel)
      }
    }
    return null
  }
}
