import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { WindowRef } from './window.ref';

@Directive({
  selector: '[wikidirective]',
})
export class WikiDirective {
  @Input() public searchTerm: String = 'Creeper';

  public constructor(private _windowRef: WindowRef) {

  }

  @HostListener('click')
  public clickEvent() {
    console.log('Click from Host Element!');
    this._windowRef.nativeWindow.open(
      'https://minecraft.fandom.com/wiki/' + this.searchTerm,
      '_blank'
    );
  }
}
