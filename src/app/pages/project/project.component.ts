import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  public projectId?: string | null;
  private projectIdSub!: Subscription;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {

  }

  ngOnInit(): void {
    this.projectIdSub = this.route.paramMap.subscribe((obs) => {
      this.projectId = obs.get("id");
    })

    this.navigationService.doSetPageTitle("Projects");
  }

  ngOnDestroy(): void {
    this.projectIdSub.unsubscribe();
  }
}
