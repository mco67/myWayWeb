import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyWayAppComponent } from '../app/my-way.component';

beforeEachProviders(() => [MyWayAppComponent]);

describe('App: MyWay', () => {
  it('should create the app',
      inject([MyWayAppComponent], (app: MyWayAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-way works!\'',
      inject([MyWayAppComponent], (app: MyWayAppComponent) => {
    expect(app.title).toEqual('my-way works!');
  }));
});
