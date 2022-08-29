import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorfullDirective } from './colorfull.directive';
import { ApphighlightDirective } from './apphighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfullDirective,
    ApphighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
