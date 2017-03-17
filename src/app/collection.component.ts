import {Component} from "@angular/core";
import {Song} from "./models/song";
import {OnInit} from "@angular/core";
import {Collection} from "./models/collection";
import {CollectionsService} from "./services/collections-service";
@Component({
  selector: 'collection',
  templateUrl: 'views/collection.component.html'
})
export class CollectionComponent implements OnInit {
  public collections: Array<Collection> = new Array<Collection>();

  constructor(private _collectionsService: CollectionsService){}

  ngOnInit(){
    this._collectionsService.getCollections().subscribe((newCollections) => {
      this.collections = newCollections;
    }, (error) => {
      console.log(error);
    });
  }

  toggleDisplay(collection){
    collection.isDisplayed = !collection.isDisplayed;
  }
}
