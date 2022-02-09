import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-out-parent',
  template: `
    <label for="item-input">Add item to list</label>
    <input type="text" id="item-input" #newItem />
    <button (click)= "addNewItem(newItem.value)">Add to Parent List</button>`,
})
export class AppOutParentComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(newItemValue: string) {
    this.newItemEvent.emit(newItemValue);
  }
}
