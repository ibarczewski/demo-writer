import {TestBed} from "@angular/core/testing";
import {CollectionComponent} from "./collection.component";
import {Collection} from "./models/collection";
import * as faker from 'faker';
import {PlayerComponent} from "./player.component";
describe('Collection Component', () => {
  let fixture;
  let _component: CollectionComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectionComponent, PlayerComponent
      ],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(CollectionComponent);
    _component = fixture.debugElement.componentInstance;
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


});
