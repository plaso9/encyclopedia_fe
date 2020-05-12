import { Injectable } from '@angular/core';
import { ArgumentNew } from './argument-new';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArgumentNewService {

  serverApi: string = "http://localhost:8000/api";
  headers: Headers = new Headers();
  options: any;

  constructor(private http: HttpClient) {
  }

  addArgument(title, description): Observable<ArgumentNew> {
    const newArgument = new ArgumentNew(title, description);
    return this.http.post<ArgumentNew>(this.serverApi + "/argument", newArgument);
  }
}
