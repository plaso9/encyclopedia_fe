import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {

  constructor() { }

  search(argumentJson){
    console.log("Wei");
    return argumentJson;
  }
}
