import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const getAllThreadsServerUrl = '/server/all';
const getThreadByIdServerUrl = '/server/script/';
const executeScriptUrl = '/server/execute';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private httpClient: HttpClient) {}

  getThreads() {
    return this.httpClient.get(getAllThreadsServerUrl);
  }

  getThreadById(id: number) {
    return this.httpClient.get(getThreadByIdServerUrl + id);
  }

  createNewThread(form) {
    return this.httpClient.post(executeScriptUrl, form.script, httpOptions);
  }
}
