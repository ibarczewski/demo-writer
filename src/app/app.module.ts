import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PlayerComponent} from "./player.component";
import {CollectionComponent} from "./collection.component";
import {CollectionsService} from "./services/collections-service";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CollectionComponent
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
