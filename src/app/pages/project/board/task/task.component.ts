import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskViewComponent} from "../../../../components/task-view/task-view.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskModel} from "../../../../models/taskModel";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  public taskData!: TaskModel;

  public viewState = {
    newTaskFormControl: new FormControl()
  }
  constructor() { }

  ngOnInit(): void {
  }

  doSaveNewTask() {
    //TODO
    if(!this.viewState.newTaskFormControl.value) {return;}
    this.taskData.name = this.viewState.newTaskFormControl.value;
    this.taskData.isLocalTaskOnly = false;
    this.viewState.newTaskFormControl.reset()
  }
}
