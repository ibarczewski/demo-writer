import {Component} from "@angular/core/src/metadata/directives";
import {Song} from "./models/song";
import {OnInit, Input} from "@angular/core";
@Component({
  selector: 'player',
  templateUrl: 'views/player.component.html'
})
export class PlayerComponent implements OnInit {
  @Input() public song: Song;

  ngOnInit(){

  }
}
