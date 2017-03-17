import {Component} from "@angular/core/src/metadata/directives";
import {Song} from "../models/song";
import {OnInit, Input} from "@angular/core";
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
  selector: 'player',
  templateUrl: '../views/player.component.html'
})
export class PlayerComponent implements OnInit {
  ngOnInit(): void {
    this.uploader = new FileUploader({url: 'http://foo.com'});
  }
  public uploader: FileUploader;
  @Input() public song: Song;
}
