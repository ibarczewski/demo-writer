/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CollectionComponent} from "./collection.component";
import {PlayerComponent} from "./player.component";
import {CollectionsService} from "../services/collections-service";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CollectionComponent, PlayerComponent
      ],
      providers: [CollectionsService]
    });

    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
