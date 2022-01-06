import { Injectable } from '@angular/core';
import {TeamModel} from "../../models/teamModel";
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService) {}

  /**
   * @description Performs a GET request and fetches all the teams that the logged-in user is part of
   * @return Promise<TeamModel[]>
   */
  public async doRequestTeams(): Promise<TeamModel[]> {
    const res = await this.fetchService.doMakeSyncRequest("team", "get", {}, {},);
    const tmpArr: TeamModel[] = []
    res.forEach((team: any) => {
      const convertedEntry = this.modelConverter.doConvertResponseToModel("TEAM", team);
      tmpArr.push((convertedEntry as TeamModel))
    })
    return tmpArr;
  }
}
