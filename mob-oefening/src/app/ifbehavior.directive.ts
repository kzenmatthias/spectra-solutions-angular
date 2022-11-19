import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Behavior, IMob } from './mob';

@Directive({
  selector: '[appIfBehavior]',
})
export class IfBehavior implements OnInit {
  @Input('appIfBehavior') mob: IMob;

  @Input('appIfBehaviorShowbehavior') behavior: Behavior = Behavior.Neutral;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log('constructor', this.mob);
  }

  public ngOnInit(): void {
    console.log('init', this.mob);
    if (this.mob.behavior === this.behavior) {
      this.viewContainerRef.createEmbeddedView(this.template);
    }
  }
}
