import { assert } from 'assertthat';
import { getApp } from '../../src/getApp';
import supertest, { SuperTest, Test } from 'supertest';

suite('app', (): void => {
  let client: SuperTest<Test>;

  setup(async (): Promise<void> => {
    const app = getApp();

    client = supertest(app);
  });

  test('using /g redirects to Google.', async (): Promise<void> => {
    const result = await client.get('/g');

    assert.that(result.status).is.equalTo(307);
    assert.that(result.headers.location).is.equalTo('https://www.google.de');
  });

  test('using /s redirects to Spiegel.', async (): Promise<void> => {
    const result = await client.get('/s');

    assert.that(result.status).is.equalTo(307);
    assert.that(result.headers.location).is.equalTo('https://www.spiegel.de');
  });
});
