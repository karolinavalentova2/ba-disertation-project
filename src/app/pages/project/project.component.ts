import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs';
import {NavigationService} from "../../services/component/navigation.service";
import {TasksService} from "../../services/component/tasks.service";
import {BoardService} from "../../services/component/board.service";
import {ProjectsService} from "../../services/component/projects.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  public viewState: { boards: any } = {
    boards: [],
  }
  public projectId!: string;
  private projectIdSub!: Subscription;
  constructor(private route: ActivatedRoute, private navigationService: NavigationService, private boardService: BoardService, private taskService: TasksService, private projectService: ProjectsService) {

  }

  ngOnInit(): void {
    // Subscribe for sub-route changes
    this.projectIdSub = this.route.paramMap.subscribe(async (obs) => {
      this.projectId = String(obs.get("id"));
      this.boardService.doRequestBoards(this.projectId).then((boards) => {
        boards.forEach(async (board) => {
          board.tasks = await this.taskService.doRequestAllTasksByBoardId(String(board.id));
        })

        this.viewState.boards = [...boards];

        if(this.viewState.boards[0]?.project[0]?.name) {
          this.navigationService.doSetPageTitle(this.viewState.boards[0].project[0].name);
        } else {
          this.doFetchNewProjectTitle()
        }
      });
    })
    this.navigationService.doSetPageTitle("Projects");
  }

  async doFetchNewProjectTitle() {
    const res = await this.projectService.doRequestProjectById(this.projectId)

    if(res?.name) {
      this.navigationService.doSetPageTitle(res.name);
    }
  }
  ngOnDestroy(): void {
    this.projectIdSub.unsubscribe();
  }
}
