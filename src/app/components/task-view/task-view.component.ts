import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TaskModel} from "../../models/taskModel";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data!: TaskModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
