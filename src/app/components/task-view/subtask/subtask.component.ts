import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent implements OnInit {
  @Input()
  public taskData!: { name: string; trackedTime: number }
  constructor() { }

  ngOnInit(): void {
  }

}
