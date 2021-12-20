import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public projectId?: string | null;
  private projectIdSub!: Subscription;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.projectIdSub = this.route.paramMap.subscribe((obs) => {
      this.projectId = obs.get("id");
    })
  }

  ngOnDestroy(): void {
    this.projectIdSub.unsubscribe();
  }

}
