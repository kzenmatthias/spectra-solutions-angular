import { Component, Input, OnInit, Type } from '@angular/core';

export type Format = 'flex' | 'grid';

@Component({
  selector: 'app-navigation',
  styles: [
    `
      ul {
        display: flex;
        list-style: none;
        margin-bottom: 0;
        padding-left: 0;
      }
      ul.grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(50px, 1fr));
      }

      li {
        text-align: center;
      }

      a {
        color: white;
        text-decoration: none;
        padding: 1rem 2rem;
        display: block;
      }

      a:hover {
        text-decoration: underline;
      }
    `,
  ],
  template: `
    <ul [class.grid]="format === 'grid'">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  `,
})
export class NavigationComponent implements OnInit {
  @Input() public format: Format = 'flex';

  public constructor() {
    console.log('on construct');
  }

  public ngOnInit(): void {
    console.log('on init');
  }
}
