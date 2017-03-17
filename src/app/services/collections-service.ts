import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Collection} from "../models/collection";
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class CollectionsService {
  constructor(private http: Http){}

  getCollections(): Observable<Array<Collection>> {
    return this.http.get('http://localhost:3000/collections').map((collection) => {
      return collection.json().collections;
    });

  }
}
