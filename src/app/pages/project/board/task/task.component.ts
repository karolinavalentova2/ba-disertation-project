import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../../../../models/taskModel";
import {FormControl} from "@angular/forms";
import {TasksService} from "../../../../services/component/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  public taskData!: TaskModel;

  @Output()
  public taskOpenAction = new EventEmitter<string>();

  public viewState = {
    newTaskFormControl: new FormControl()
  }
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  doSaveNewTask() {
    if(!this.viewState.newTaskFormControl.value) {
      return;
    }
    this.taskData.name = this.viewState.newTaskFormControl.value;
    this.taskData.isLocalTaskOnly = false;
    this.viewState.newTaskFormControl.reset()
    //TODO: Do something with the response
    this.taskService.doSaveNewTask(this.taskData);

  }

  /**
   * @description Emits the current task id to the parent component set listener
   * @param event
   */
  emitOpenTask(event: Event) {
    if((event.target as HTMLElement).classList.contains('clickable')) {
      return;
    }
    this.taskOpenAction.emit(this.taskData.id);
  }
}
