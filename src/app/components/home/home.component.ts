import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  threadForm: FormGroup;
  validMessage: string = "";

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threadForm = new FormGroup({
      script: new FormControl('', Validators.required)
    });
  }

  submitExecutionScript() {
    if (this.threadForm.valid) {
      this.threadService.createNewThread(this.threadForm.value).subscribe(
        data => {
          this.threadForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = "Please fill out from before submitting!";
    }
  }
}
