import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';
import {NavigationService} from "../../services/component/navigation.service";
import {BoardModel} from "../../models/boardModel";
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
  private projectBoardsSub!: Subscription;
  constructor(private route: ActivatedRoute, private navigationService: NavigationService, private projectsService: ProjectsService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.projectIdSub = this.route.paramMap.subscribe((obs) => {
      this.projectId = String(obs.get("id"));
      this.projectBoardsSub = this.projectsService.doSubsToBoards().subscribe((boards: BoardModel[]) => {
        console.log({boards})
        this.viewState.boards = [...boards];

      })

      this.projectsService.doRequestBoards(this.projectId);
    })
    this.navigationService.doSetPageTitle("Projects");
  }

  ngOnDestroy(): void {
    this.projectIdSub.unsubscribe();
  }
}
