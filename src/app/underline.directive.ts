import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class UnderlineDirective {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }
}
