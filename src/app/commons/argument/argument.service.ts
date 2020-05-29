import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Argument } from './argument';
import { ConstantsService } from '../constants/constants.service';


@Injectable({
  providedIn: 'root'
})
export class ArgumentService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  search(argumentJson){
    var urlParams = "";
    if(argumentJson.argumentSearch) {
      urlParams = "?s=true&descrizione=" +  argumentJson.argumentSearch;
      this.http.get<Argument>(this._constant.baseApiUrl + 'argument' + urlParams).subscribe(data => {
        console.log(data);
      });
      return argumentJson;
    } else {
      return;
    }
  }
}
