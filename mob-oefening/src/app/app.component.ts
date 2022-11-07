import { Component } from '@angular/core';
import { IMob, Behavior } from './mob';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mob-oefening';

  public mobs: IMob[] = [
    {
      name: 'Creeper',
      picture: '/assets/creeper.webp',
      behavior: Behavior.Hostile,
      healthPoints: 10,
    },
    {
      name: 'Villager',
      picture: '/assets/villager.jpg',
      behavior: Behavior.Passive,
      healthPoints: 10,
    },
  ];
}
