import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobCardComponent } from './mobcard.component';

import { AppComponent } from './app.component';
import { WikiDirective } from './wiki.directive';
import { IfBehavior } from './ifbehavior.directive';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, MobCardComponent, WikiDirective, IfBehavior],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
