import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class HighLightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
}
