import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/component/navigation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.doSetPageTitle("Dashboard");
  }

}
