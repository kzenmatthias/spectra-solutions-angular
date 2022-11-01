import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'ul',
})
export class BackgroundDirective {
  public constructor(element: ElementRef<HTMLUListElement>) {
    element.nativeElement.style.backgroundColor = 'darkgreen';
  }
}
