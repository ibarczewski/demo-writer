import {Component} from "@angular/core/src/metadata/directives";
import {Song} from "./models/song";
import {OnInit} from "@angular/core";
@Component({
  selector: 'collection',
  templateUrl: 'views/collection.component.html'
})
export class CollectionComponent implements OnInit {
  public songs: Array<Song> = new Array<Song>();

  ngOnInit(){
    let song = new Song();
    song.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    song.notes = 'This is a good version.';
    song.date = '01/01/2017';
    this.songs.push(song);
    let song2 = new Song();
    song2.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    song2.notes = 'This is a new version.';
    song2.date = '01/03/2017';
    this.songs.push(song2);
    let song3 = new Song();
    song3.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    song3.notes = 'This is a new version.';
    song3.date = '01/03/2017';
    this.songs.push(song3);
    let song4 = new Song();
    song4.path = 'http://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3';
    song4.notes = 'This is a new version.';
    song4.date = '01/03/2017';
    this.songs.push(song4);
  }
}
