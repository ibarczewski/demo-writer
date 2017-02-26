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

    // let songs1 = new Array<Song>();
    // let songs2 = new Array<Song>();
    // let collection1 = new Collection();
    // let collection2 = new Collection();
    // let song = new Song();
    // song.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song.notes = 'First draft.';
    // song.date = '01/01/2017';
    // songs1.push(song);
    // let song2 = new Song();
    // song2.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song2.notes = 'Added an ebow section to the intro.';
    // song2.date = '01/03/2017';
    // songs1.push(song2);
    // let song3 = new Song();
    // song3.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song3.notes = 'Added drums to the bridge.';
    // song3.date = '01/05/2017';
    // songs1.push(song3);
    // let song4 = new Song();
    // song4.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song4.notes = 'Fixed a part where the lead guitar sounded flat.';
    // song4.date = '01/08/2017';
    // songs1.push(song4);
    //
    // collection1.title = 'Mountain Ash';
    // collection1.songs = songs1;
    //
    // let song5 = new Song();
    // song5.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song5.notes = 'First draft.';
    // song5.date = '03/15/2017';
    // songs2.push(song5);
    // let song6 = new Song();
    // song6.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song6.notes = 'Rewrote the chorus - much better. Needs a heavier tone on the bass.';
    // song6.date = '03/18/2017';
    // songs2.push(song6);
    // let song7 = new Song();
    // song7.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song7.notes = 'Bass sounds amazing now. Bridge is unfinished';
    // song7.date = '03/21/2017';
    // songs2.push(song7);
    // let song8 = new Song();
    // song8.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    // song8.notes = 'Final version.';
    // song8.date = '03/23/2017';
    // songs2.push(song8);
    //
    // collection2.title = 'Metal Jam';
    // collection2.songs = songs2;
    //
    // this.collections.push(collection1);
    // this.collections.push(collection2);
  }

  toggleDisplay(collection){
    collection.isDisplayed = !collection.isDisplayed;
  }
}
