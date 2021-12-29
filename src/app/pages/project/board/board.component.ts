import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {TaskViewComponent} from "../../../components/task-view/task-view.component";
import {FormControl} from "@angular/forms";
import {MockProjectBoard} from "../../../models/mockData";
import {BoardModel} from "../../../models/boardModel";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  public viewState = {
    newColumn: false,
    newColumnFormControl: new FormControl()
  }

  constructor(public dialog: MatDialog) { }

  ngOnDestroy(): void {

    }

  containers: BoardModel[] = [...MockProjectBoard];

  ngOnInit(): void {
  }

  dropItem(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.containers.map(x => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<(any)[], any>) {
    moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
  }

  openTask(taskId: string | number, boardId: string | number, isLocalTaskOnly?: boolean) {
    if(isLocalTaskOnly) { return }
    const task = this.doGetTaskById(boardId, taskId);
    if(!task) { return; }
    console.log(task)
    const dialogRef = this.dialog.open(TaskViewComponent, {
      panelClass: 'task-view-dialog-container',
      data: {
        task
      },
    });
    document.body.classList.add("task-list-open");

    dialogRef.afterClosed().subscribe(result => {
      document.body.classList.remove("task-list-open");
      console.log(`Dialog result: ${result}`);
    });
  }

  doCreateColumn() {
    this.viewState.newColumn = true;
  }

  doSaveNewColumn() {
    this.viewState.newColumn = false;
    if(!this.viewState.newColumnFormControl.value) { return }
    this.containers.push({
      id: parseInt(String(Math.random() * 1000)),
      name: this.viewState.newColumnFormControl.value,
      tasks: [],
    })

    this.viewState.newColumnFormControl.reset();
  }

  doAddNewTask(boardId: string | number) {
    for(let container of this.containers) {
      if(container.id === boardId) {
        container.tasks.push(      {
          name: "New task",
          createdAt: new Date().toLocaleDateString(),
          author: "Adrian",
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
  }

  private doGetTaskById(boardId: string | number, taskId: string | number) {
    //TODO
    const board = this.containers.filter(board => board.id === boardId);
    if(board.length) {
      for(let task of board[0].tasks) {
        if(task.id === taskId) {
          return task;
        }
      }
    }
    return null;
  }
}
