import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TaskModel} from "../../models/taskModel";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  // @Inject(MAT_DIALOG_DATA) public data!: {task: TaskModel};
  constructor(@Inject(MAT_DIALOG_DATA) public data: {task: TaskModel}) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.task.subTasks, event.previousIndex, event.currentIndex);
  }

  // subtasks: BoardModel[] = [...MockProjectBoard];

  addNewSubtask() {
    this.data.task.subTasks.push({
      name: "New task",
      createdAt: new Date().toLocaleDateString(),
      author: "Jane Doe",
      id: String(Math.random() * 10000),
      assignedTo: "",
      description: "",
      subTasks: [],
      dueDate: new Date().toLocaleDateString(),
      contributors: [],
      comments: [],
      trackedTime: "",
      isLocalTaskOnly: true,
    })
  }

}
