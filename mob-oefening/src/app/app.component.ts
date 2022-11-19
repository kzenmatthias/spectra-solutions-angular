import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMob, Behavior } from './mob';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mob-oefening';

  public showBehavior: Behavior = Behavior.Passive;

  public mobs: IMob[] = [
    {
      name: 'Creeper',
      picture: '/assets/creeper.webp',
      behavior: Behavior.Hostile,
      healthPoints: 10,
    },
    {
      name: 'Evoker',
      picture: '/assets/evoker.png',
      behavior: Behavior.Hostile,
      healthPoints: 12,
    },
    {
      name: 'Vex',
      picture: '/assets/vex.webp',
      behavior: Behavior.Hostile,
      healthPoints: 7,
    },
    {
      name: 'Husk',
      picture: '/assets/husk.png',
      behavior: Behavior.Hostile,
      healthPoints: 10,
    },
    {
      name: 'Warden',
      picture: '/assets/warden.webp',
      behavior: Behavior.Hostile,
      healthPoints: 250,
    },
    {
      name: 'Villager',
      picture: '/assets/villager.jpg',
      behavior: Behavior.Passive,
      healthPoints: 10,
    },
    {
      name: 'Sheep',
      picture: '/assets/sheep.png',
      behavior: Behavior.Passive,
      healthPoints: 8,
    },
    {
      name: 'Cow',
      picture: '/assets/cow.jpg',
      behavior: Behavior.Passive,
      healthPoints: 10,
    },
    {
      name: 'Cod',
      picture: '/assets/cod.png',
      behavior: Behavior.Passive,
      healthPoints: 3,
    },
    {
      name: 'Zombified Piglin',
      picture: '/assets/zombifiedpiglin.png',
      behavior: Behavior.Neutral,
      healthPoints: 8,
    },
  ];

  public medium$: Observable<boolean>;

  public constructor(breakpointobserver: BreakpointObserver) {
    this.medium$ = breakpointobserver
      .observe(Breakpoints.Medium)
      .pipe(map((x) => x.matches));
  }
}
