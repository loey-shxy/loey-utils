import assert from 'assert'

import {Validate, Utils} from '../src/utils'

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

  describe('Utils.numberFixed', () => {
    test('true', () => {
      assert.strictEqual(Utils.numberFixed(0.5254), 0.52)
    })
  })
})