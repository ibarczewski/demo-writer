import {TestBed} from "@angular/core/testing";
import {CollectionComponent} from "./collection.component";
import {Collection} from "../models/collection";
import * as faker from 'faker';
import {PlayerComponent} from "./player.component";
import {CollectionsService} from "../services/collections-service";
import {Observable} from "rxjs";
describe('Collection Component', () => {
  let _fixture;
  let _component: CollectionComponent;
  let _collectionsService: CollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectionComponent, PlayerComponent
      ],
      providers: [CollectionsService]
    });
    TestBed.compileComponents();
    _fixture = TestBed.createComponent(CollectionComponent);
    _component = _fixture.debugElement.componentInstance;
    _collectionsService = _fixture.debugElement.injector.get(CollectionsService);
  });

  describe('#toggleCollection', () => {
    it('should toggle the display of the collection passed in', ( ()=> {
      let collection = new Collection();
      var isDisplayed = faker.random.boolean();
      collection.isDisplayed = isDisplayed;

      _component.toggleDisplay(collection);

      expect(collection.isDisplayed).toBe(!isDisplayed);
    }));
  });

  describe('#ngOnInit', () => {
    it('should call to the http service for collections and set the collections object', () => {
      let collections = new Array<Collection>();

      spyOn(_collectionsService, 'getCollections').and.callFake(() => {
        return new Observable(observer => {
          observer.next(collections);
        });
      });

      _component.ngOnInit();
      expect(_collectionsService.getCollections).toHaveBeenCalled();
      expect(_component.collections).toBe(collections);
    });
  });

  it('should log the error if one is returned', () => {
    let error = faker.lorem.word();
    spyOn(console, 'log');

    spyOn(_collectionsService, 'getCollections').and.callFake(() => {
      return new Observable(observer => {
        observer.error(error);
      });
    });

    _component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith(error);
  });
});
