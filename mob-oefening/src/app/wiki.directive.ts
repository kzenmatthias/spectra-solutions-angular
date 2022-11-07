import { Directive, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[wikidirective]',
})
export class WikiDirective implements OnInit {
  @Input() public searchTerm: String = 'Creeper';

  constructor() {}

  ngOnInit() {}

  @HostListener('click', ['$event'])
  clickEvent(event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    console.log('Click from Host Element!');
    window.open(
      'https://minecraft.fandom.com/wiki/' + this.searchTerm,
      '_blank'
    );
  }
}
