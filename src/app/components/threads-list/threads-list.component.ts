import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {
  public threads;

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.getThreads();
  }

  getThreads() {
    this.threadService.getThreads().subscribe(
      data => { this.threads = data; },
      error => console.error(error),
      () => console.log('threads loaded')
    );
  }

}
