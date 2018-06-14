import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadsListComponent } from './components/threads-list/threads-list.component';
import {ThreadService} from "./services/thread.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { ThreadDetailComponent } from './components/thread-detail/thread-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    ThreadDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
