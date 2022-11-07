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
  @Input('appIfBehavior') mob: IMob = {
    name: '',
    picture: '',
    behavior: Behavior.Neutral,
    healthPoints: 0,
  };

  @Input('appIfBehaviorShowbehavior') behavior: Behavior = Behavior.Neutral;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  public ngOnInit(): void {
    if (this.mob.behavior === this.behavior) {
      this.viewContainerRef.createEmbeddedView(this.template);
    }
  }
}
