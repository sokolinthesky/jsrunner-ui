import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ThreadsListComponent} from "./components/threads-list/threads-list.component";
import {ThreadDetailComponent} from "./components/thread-detail/thread-detail.component";

const routes: Routes = [
  {
    path: 'threads',
    component: ThreadsListComponent
  },
  {
    path: 'thread/:id',
    component: ThreadDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
