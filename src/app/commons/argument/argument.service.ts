import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Argument } from './argument';
import { ConstantsService } from '../constants/constants.service';


@Injectable({
  providedIn: 'root'
})
export class ArgumentService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  addArgument(argumentJson): Observable<Argument> {
    const newArgument = new Argument(argumentJson);
    return this.http.post<Argument>(this._constant.baseApiUrl + "argument", newArgument);
  }

  editArgument(argumentJson, id): Observable<Argument> {
    const newArgument = new Argument(argumentJson);
    return this.http.post<Argument>(this._constant.baseApiUrl + "argument/" + id + "/update", newArgument);
  }

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

  getAllArgument(){
    return this.http.get<Argument>(this._constant.baseApiUrl + 'argument');
  }

  getArgument(id) {
    return this.http.get<Argument>(this._constant.baseApiUrl + 'argument/' + id);
  }
}
