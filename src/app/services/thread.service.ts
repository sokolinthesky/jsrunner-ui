import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const getAllThreadsServerUrl = '/server/all';
const getThreadByIdServerUrl = '/server/script/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private httpClient: HttpClient) {}

  getThreads() {
    return this.httpClient.get(getAllThreadsServerUrl, httpOptions);
  }

  getThreadById(id: number) {
    return this.httpClient.get(getThreadByIdServerUrl + id);
  }

}
