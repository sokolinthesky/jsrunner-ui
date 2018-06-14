import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadsListComponent } from './components/threads-list/threads-list.component';
import {ThreadService} from "./services/thread.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { ThreadDetailComponent } from './components/thread-detail/thread-detail.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StopThreadComponent } from './components/stop-thread/stop-thread.component';
import {ThreadGuardService} from "./services/thread-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    ThreadDetailComponent,
    HomeComponent,
    StopThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ThreadService, ThreadGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
