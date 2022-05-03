import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public managerKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;

      case 'ArrowDown':
        console.log('down');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;

      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;

      case 'ArrowRight':
        console.log('right');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(diretion: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex((item) => item.inFocused());
    const targetElementFocus = items[curentSelectedIndex + diretion];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return diretion === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
