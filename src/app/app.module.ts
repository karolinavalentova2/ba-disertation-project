import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './pages/root/app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavigationComponent} from "./components/navigation/navigation.component";
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {TeamsComponent} from './components/navigation/teams/teams.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { BoardComponent } from './pages/project/board/board.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import { TaskComponent } from './pages/project/board/task/task.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTabsModule} from "@angular/material/tabs";
import { ProjectComponent } from './pages/project/project.component';
import { ReportsComponent } from './pages/reports/reports.component';
import {MatInputModule} from "@angular/material/input";
import {A11yModule} from "@angular/cdk/a11y";
import { SubtaskComponent } from './components/task-view/subtask/subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    DashboardComponent,
    TeamsComponent,
    MyTasksComponent,
    InboxComponent,
    BoardComponent,
    TaskComponent,
    TaskViewComponent,
    ProjectComponent,
    ReportsComponent,
    SubtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    DragDropModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
