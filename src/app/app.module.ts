import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './comps/app.component';
import {PlayerComponent} from "./comps/player.component";
import {CollectionComponent} from "./comps/collection.component";
import {CollectionsService} from "./services/collections-service";
import {UploadButtonComponent} from "./comps/upload-button.component";
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CollectionComponent,
    UploadButtonComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
