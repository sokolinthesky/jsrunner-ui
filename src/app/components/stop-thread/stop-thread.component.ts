import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stop-thread',
  templateUrl: './stop-thread.component.html',
  styleUrls: ['./stop-thread.component.css']
})
export class StopThreadComponent implements OnInit {

  constructor(private threadService: ThreadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.stopThread(this.route.snapshot.params.id);
  }

  stopThread(id: number) {
    this.threadService.stopThread(id).subscribe(
      () => console.log('thread ' + id  + ' was stop')
    );
  }

}
