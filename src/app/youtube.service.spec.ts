/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { YoutubeService } from './youtube.service';

describe('Youtube Service', () => {
  beforeEachProviders(() => [YoutubeService]);

  it('should ...',
      inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
