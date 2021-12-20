import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {Routes} from "@angular/router";
import {MyTasksComponent} from "./pages/my-tasks/my-tasks.component";
import {InboxComponent} from "./pages/inbox/inbox.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ReportsComponent} from "./pages/reports/reports.component";

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'mytasks',
    component: MyTasksComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
]
