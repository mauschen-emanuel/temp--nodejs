import { assert } from 'assertthat';
import { getApp } from '../../src/getApp';

suite('getApp', (): void => {
  test('returns an Express app.', async (): Promise<void> => {
    const app = getApp();

    assert.that(app).is.not.undefined();
  });
});
