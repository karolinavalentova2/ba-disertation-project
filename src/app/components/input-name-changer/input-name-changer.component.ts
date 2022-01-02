import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-name-changer',
  templateUrl: './input-name-changer.component.html',
  styleUrls: ['./input-name-changer.component.scss']
})
export class InputNameChangerComponent implements OnInit {
  @Input() boundValue: any;
  @Output() valueChanged = new EventEmitter<any>();
  constructor() { }

  viewState = {
    taskNameFormControl: new FormControl({}),
    showInput: false,
    tmpBoundValue: undefined,
  }

  ngOnInit(): void {
    this.viewState.taskNameFormControl.setValue(this.boundValue);
    this.viewState.tmpBoundValue = this.boundValue;
  }
  doSelectText(event: Event) {
    (event.currentTarget as HTMLInputElement).select()
  }

  doEmitIfValueChanged() {
    const currentInputValue = this.viewState.taskNameFormControl.value;
    if(currentInputValue !== this.viewState.tmpBoundValue) {
      this.valueChanged.emit(currentInputValue);
    }
  }
}
