import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TaskModel} from "../../models/taskModel";
import {UserModel} from "../../models/userModel";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MockUserModel} from "../../models/mockData";
import {FormControl} from "@angular/forms";
import {MAT_DATE_FORMATS} from '@angular/material/core';
import moment from 'moment';
import {MY_DATE_FORMATS} from "../../static-config/configuration";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: {task: TaskModel}) { }

  viewState = {
    taskNameFormControl: new FormControl(),
    showInput: false,
    tmpCalendarDate: ''
  }

  loggedUser: UserModel = MockUserModel;
  public isDatePickerVisible = false;

  ngOnInit(): void {
    this.viewState.tmpCalendarDate = moment(this.data.task.dueDate).format(MY_DATE_FORMATS.display.dateInput);
    this.viewState.taskNameFormControl.setValue(this.data.task.name);
  }

  onCalendarChanged(event: MatDatepickerInputEvent<any, any>) {
    this.data.task.dueDate = moment(event.value).toISOString();
    this.viewState.tmpCalendarDate = moment(event.value).format(MY_DATE_FORMATS.display.dateInput);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.task.subTasks, event.previousIndex, event.currentIndex);
  }

  addNewSubtask() {
    // this.data.task.subTasks.push({
    //   name: "New task",
    //   createdAt: new Date().toLocaleDateString(),
    //   author: {
    //     id: 1,
    //     name: 'Karolina',
    //     email: 'test@test.com',
    //     password: '1234',
    //     verificationCode: 'string',
    //     imagePath: './assets/profile_1.png',
    //     created: new Date().toLocaleDateString(),
    //     active: true,
    //   },
    //   id: String(Math.random() * 10000),
    //   assignedTo: {
    //     id: 0,
    //     name: '',
    //     email: '',
    //     password: '',
    //     verificationCode: '',
    //     imagePath: './assets/default-profile.png',
    //     created: new Date().toLocaleDateString(),
    //     active: true,
    //   },
    //   description: "",
    //   subTasks: [],
    //   dueDate: new Date().toLocaleDateString(),
    //   contributors: [],
    //   comments: [],
    //   trackedTime: 0,
    //   isLocalTaskOnly: true,
    //   completed: false,
    //   active: true,
    //   modified: new Date().toLocaleDateString(),
    //   columnIndex: 1,
    // })
  }

  doChangeTaskName(newName: string) {
    this.data.task.name = newName;
  }


}
