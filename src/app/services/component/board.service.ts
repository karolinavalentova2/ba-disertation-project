import { Injectable } from '@angular/core';
import {BoardModel} from "../../models/boardModel";
import {Observable, Subject} from "rxjs";
import {ModelConverterService} from "../api/model-converter.service";
import {FetcherService} from "../api/fetcher.service";
import {ProjectModel} from "../../models/projectModel";
import {AuthService} from "../api/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private modelConverter: ModelConverterService, private fetchService: FetcherService, private authService: AuthService) {}

  /**
   * @description Request all the boards by a given project id
   * @param projectId - The id of the project
   */
  public async doRequestBoards(projectId: string) {
    const res = await this.fetchService.doMakeSyncRequest(`/board/byProjectId/${projectId}`, "get", {}, {});
    const tmpArr: BoardModel[] = []
    res.forEach((board: any) => {
      const convertedEntry = this.modelConverter.doConvertResponseToModel("BOARD_COLUMN", board);
      tmpArr.push((convertedEntry as BoardModel))
    })
    return tmpArr;
  }

  /**
   * @description Save a new board;
   * @param boardData - The new board entry to be saved
   */
  public async doSaveNewBoard(boardData: BoardModel) {
    const { name, boardIndex } = boardData
    const tmpBoardData = {
      name, boardIndex, active: 1, project_fk: boardData.project.id, author_fk: this.authService.doReturnLoggedUser().id
    }
    const res = await this.fetchService.doMakeSyncRequest(`/board`, "post", {}, tmpBoardData);
    //TODO: Do something with the request response
    console.log(res)
  }
}
