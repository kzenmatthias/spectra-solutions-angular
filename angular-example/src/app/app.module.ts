import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './background.directive';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, BackgroundDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
