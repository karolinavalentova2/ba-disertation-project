import { Injectable } from '@angular/core';
import {BoardModel} from "../models/boardModel";
import {MockProjectBoard} from "../models/mockData";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boardDataCache: BoardModel[] = [];

  private boardDataSubject: Subject<BoardModel[]> = new Subject<BoardModel[]>()
  //TODO: Hook real comm service
  private communicationServiceMock = () => { return [...MockProjectBoard] }
  constructor() { }

  public doGetAllBoardDataByProjectId(projectId: string | number): void {
    this.boardDataCache = this.communicationServiceMock();

    this.boardDataSubject.next(this.boardDataCache);
  }

  public doSubscribeBoardData(): Observable<BoardModel[]> {
    return this.boardDataSubject.asObservable();
  }

  public get boardData() {
    return this.boardDataCache;
  }
}
