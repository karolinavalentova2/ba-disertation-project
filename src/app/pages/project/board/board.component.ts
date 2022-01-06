import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {TaskViewComponent} from "../../../components/task-view/task-view.component";
import {FormControl} from "@angular/forms";
import {BoardModel} from "../../../models/boardModel";
import {CommentsService} from "../../../services/component/comments.service";
import {AuthService} from "../../../services/api/auth.service";
import {BoardService} from "../../../services/component/board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input()
  boards!: BoardModel[];

  public viewState = {
    newColumn: false,
    newColumnFormControl: new FormControl()
  }

  constructor(public dialog: MatDialog, private commentService: CommentsService, private authService: AuthService, private boardsService: BoardService) { }

  /**
   * @description Handles the change in board or position for a task inside a board
   * @param event
   */
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

  /**
   * @description Returns an array of the ids of all the boards in the project.
   */
  getConnectedList(): any[] {
    return this.boards.map(x => `${x.id}`);
  }
  /**
   * @description Handles the change in position of a board in the boards array when a board is moved
   */
  dropGroup(event: CdkDragDrop<(any)[], any>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
  }

  async openTask(taskId: string, boardId: string | number, isLocalTaskOnly?: boolean) {
    if(isLocalTaskOnly) { return }
    const task = this.doGetTaskById(boardId, taskId);
    if(!task) { return; }
    task.comments = [...await this.commentService.doRequestCommentsByTaskId(taskId)];

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

    const tmpBoardData = {
      name: this.viewState.newColumnFormControl.value,
      tasks: [],
      project: this.boards[0].project,
      author_fk: this.authService.doReturnLoggedUser().id,
      id: "NEW",
      created: new Date().toLocaleDateString(),
      active: true,
      boardIndex: this.boards.length - 1
    }

    this.boardsService.doSaveNewBoard(tmpBoardData).then(() => {
      this.boards.push(tmpBoardData)
    })

    this.viewState.newColumnFormControl.reset();
  }

  doAddNewTask(boardId: string) {
    for(let container of this.boards) {
      if(container.id === boardId) {
        container.tasks.push({
          name: "New task",
          createdAt: new Date().toISOString(),
          id: "NEW",
          description: "",
          assignedTo: null,
          author_fk: this.authService.doReturnLoggedUser().id,
          dueDate: null,
          contributors: [],
          comments: [],
          trackedTime: 0,
          isLocalTaskOnly: true,
          completed: false,
          active: true,
          modified: new Date().toISOString(),
          columnIndex: container.tasks.length - 1,
          column: container,
          subTasks: [],
        })
      }
    }
  }

  private doGetTaskById(boardId: string | number, taskId: string | number) {
    const board = this.boards.filter(board => board.id === boardId);
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
