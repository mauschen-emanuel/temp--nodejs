import { assert } from 'assertthat';
import { findRoute } from '../../src/routes/findRoute';
import { Route } from '../../src/routes/Route';

suite('findRoute', (): void => {
  test('an input source string returns a target string when the source exists.', async (): Promise<void> => {
    // Arrange
    const source = 'g';
    const routes = [{ source: 'g', target: 'https://www.google.de' }];

    // Act
    const actualTarget = findRoute(routes, source);

    // Assert
    assert.that(actualTarget).is.equalTo('https://www.google.de');
  });

  test('an input source string returns undefined when the source does not exist.', async (): Promise<void> => {
    // Arrange
    const source = 'z';
    const routes = [{ source: 'g', target: 'https://www.google.de' }];

    // Act
    const actualTarget = findRoute(routes, source);

    // Assert
    assert.that(actualTarget).is.undefined();
  });

  test('returns undefined given an empty routes list.', async (): Promise<void> => {
    // Arrange
    const routes: Route[] = [];

    // Act
    const actualTarget = findRoute(routes, '');

    // Assert
    assert.that(actualTarget).is.undefined();
  });
});
