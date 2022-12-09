import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public medium$: Observable<boolean>;

  public constructor(breakpointObserver: BreakpointObserver) {
    this.medium$ = breakpointObserver
      .observe(Breakpoints.Medium)
      .pipe(map((x) => x.matches));
    // .subscribe((x) => console.log(x));
  }
}
