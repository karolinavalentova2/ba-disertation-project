import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  public taskOpenAction = new EventEmitter<string|number>();

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

  emitOpenTask(event: Event) {
    if((event.target as HTMLElement).classList.contains('mat-menu-trigger')) {
      return;
    }
    this.taskOpenAction.emit(this.taskData.id);
  }
}
