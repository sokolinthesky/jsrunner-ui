import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ThreadsListComponent} from "./components/threads-list/threads-list.component";
import {ThreadDetailComponent} from "./components/thread-detail/thread-detail.component";
import {HomeComponent} from "./components/home/home.component";
import {ThreadGuardService} from "./services/thread-guard.service";
import {StopThreadComponent} from "./components/stop-thread/stop-thread.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'threads',
    component: ThreadsListComponent
  },
  {
    path: 'thread/:id',
    canActivate: [ ThreadGuardService ],
    component: ThreadDetailComponent,
  },
  {
    path: 'thread/stop/:id',
    canActivate: [ ThreadGuardService ],
    component: StopThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
