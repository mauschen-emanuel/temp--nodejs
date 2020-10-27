'use strict';

const { assert } = require('assertthat');

const add = require('../../src/calculator/add');

suite('add', () => {
  test('returns the sum of two positive integers.', async () => {
    const sum = add(23, 42);

    assert.that(sum).is.equalTo(65);
  });

  test('returns the sum of two negative integers.');

  test('returns 0 when the same positive and negative integer are given.');
});
