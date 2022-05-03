import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public managerKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);

        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}
