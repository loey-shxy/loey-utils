import assert from 'assert'

import {Validate} from '../src'

describe('validate', () => {
  describe('Validate.isNumber', () => {
    test('true', () => {
      assert.strictEqual(Validate.isNumber('12'), true)
    })
  })

  describe('Validate.letterNumber', () => {
    test('true', () => {
      assert.strictEqual(Validate.letterNumber('122ss'), true)
    })
  })
})