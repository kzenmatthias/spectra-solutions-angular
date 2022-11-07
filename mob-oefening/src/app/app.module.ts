import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobCardComponent } from './mobcard.component';

import { AppComponent } from './app.component';
import { WikiDirective } from './wiki.directive';
import { IfBehavior } from './ifbehavior.directive';

@NgModule({
  declarations: [AppComponent, MobCardComponent, WikiDirective, IfBehavior],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
