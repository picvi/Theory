import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BackgroundDirective } from './directives/background.directives';
import { PowPipe } from './app.pipe';
import { TodoDisplayPipe } from './todo-display.pipe';
import { SearchComponent } from './add-item/search/search.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    BackgroundDirective,
    PowPipe,
    TodoDisplayPipe,
    SearchComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
