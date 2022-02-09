import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  template: `<h1> {{firstName}} </h1>
  `,
})
export class AppChildInputComponent {
  @Input() firstName = '';
}
