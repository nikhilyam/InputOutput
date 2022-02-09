import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to angular</h1> 
  <app-input-child [firstName]="currentName"></app-input-child>
  <app-out-parent (newItemEvent)="addItem($event)"></app-out-parent>
  <ul><li *ngFor="let item of items">{{item}}</li></ul>
  `,
})
export class AppComponent {
  currentName = 'Nikhil';
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
