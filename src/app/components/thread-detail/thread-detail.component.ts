import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  public thread;

  constructor(private threadService: ThreadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getThread(this.route.snapshot.params.id);
  }

  getThread(id) {
    this.threadService.getThreadById(id).subscribe(
      data => { this.thread = data; },
      error => console.error(error)
    );
  }
}
