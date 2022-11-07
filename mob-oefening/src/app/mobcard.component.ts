import { Component, Input, OnInit } from '@angular/core';
import { IMob, Behavior } from './mob';

@Component({
  selector: 'app-mobcard',
  styleUrls: ['./mobcard.component.scss'],
  template: ` <div class="card" wikidirective [searchTerm]="mob.name">
    <img src="{{ mob.picture }}" width="50" class="mobhead" />
    <h2>
      {{ mob.name }} <span class="behavior">{{ mob.behavior }}</span>
    </h2>
    <div class="healthpoints">
      <ng-container *ngIf="mob.healthPoints < 20">
        <ng-container *ngFor="let _ of [].constructor(mob.healthPoints)">
          <img src="/assets/heart.png" alt="heart" width="20" />
        </ng-container>
      </ng-container>
      <ng-container *ngIf="mob.healthPoints > 20">
        {{ mob.healthPoints }}x
        <img src="/assets/heart.png" alt="heart" width="20" />
        &nbsp; !!!!DANGER!!!!
      </ng-container>
    </div>
  </div>`,
})
export class MobCardComponent {
  @Input() public mob: IMob = {
    name: 'Creeper',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticdelivery.nexusmods.com%2Fmods%2F197%2Fimages%2F135%2F135-1587118218-1526436283.jpeg&f=1&nofb=1&ipt=b6891039d614ccc88fa67c8a52499fe6f838ec56752a279074274429cdc67856&ipo=images',
    behavior: Behavior.Hostile,
    healthPoints: 10,
  };
}
