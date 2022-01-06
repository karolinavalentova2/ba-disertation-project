import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TaskModel} from "../../models/taskModel";
import {UserModel} from "../../models/userModel";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormControl} from "@angular/forms";
import {MAT_DATE_FORMATS} from '@angular/material/core';
import moment from 'moment';
import {MY_DATE_FORMATS} from "../../static-config/configuration";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {TasksService} from "../../services/component/tasks.service";
import {AuthService} from "../../services/api/auth.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class TaskViewComponent implements OnInit {
  // @Inject(MAT_DIALOG_DATA) public data!: {task: TaskModel};
  constructor(@Inject(MAT_DIALOG_DATA) public data: {task: TaskModel}, private authService: AuthService, private tasksService: TasksService) { }

  viewState = {
    taskNameFormControl: new FormControl(),
    showInput: false,
    tmpCalendarDate: ''
  }

  loggedUser!: UserModel;
  public isDatePickerVisible = false;

  async ngOnInit() {
    this.viewState.tmpCalendarDate = moment(this.data.task.dueDate).format(MY_DATE_FORMATS.display.dateInput);
    this.viewState.taskNameFormControl.setValue(this.data.task.name);

    this.loggedUser = this.authService.doReturnLoggedUser();
  }

  onCalendarChanged(event: MatDatepickerInputEvent<any, any>) {
    this.data.task.dueDate = moment(event.value).toISOString();
    this.viewState.tmpCalendarDate = moment(event.value).format(MY_DATE_FORMATS.display.dateInput);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.task.subTasks, event.previousIndex, event.currentIndex);
  }

  addNewSubtask() {
    this.data.task.subTasks.push({
      name: "New task",
      createdAt: new Date().toLocaleDateString(),
      author: this.authService.doReturnLoggedUser(),
      assignedTo: null,
      id: String(Math.random() * 10000),
      description: "",
      subTasks: [],
      dueDate: new Date().toLocaleDateString(),
      contributors: [],
      comments: [],
      trackedTime: 0,
      isLocalTaskOnly: true,
      completed: false,
      active: true,
      modified: new Date().toLocaleDateString(),
      columnIndex: 1
    })
  }

  doChangeTaskName(newName: string) {
    this.data.task.name = newName;

    this.tasksService.doUpdateTask(this.data.task.id, {
      name: newName
    }).then((res) => {
      console.log(res);
    })
  }
}
