// @ts-ignore
import * as matchers from 'jest-extended'
expect.extend(matchers)

import square from './index'

test('square of 5 is 25', () => {
  expect(square(5)).toBe(25)
})

describe('Test Matchers', () => {
  test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()

  })

  test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    console.log(value)
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3) // This works.
  })

  test('should test arrays', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk'
    ]
    expect(shoppingList).toContain('milk')
  })

  test('should test strings', () => {
    expect('Naftali').toMatch(/Naif/)
  })

  test('should test exceptions', () => {
    const compileAndroidCode = () => {
      throw new Error('JDK not found in path')
    }

    expect(() => compileAndroidCode()).toThrow(Error)
  })
})

describe('Custom matchers', () => {
  test('should test exceptions', () => {
    const compileAndroidCode = () => {
      throw new Error('JDK not found in path')
    }

    expect(() => compileAndroidCode()).toThrow(Error)
    expect.toThrowWithMessage(compileAndroidCode, 'JDK not found in paht')

  })

  test('Arrays', () => {
    const rockBands = ['Paramore', 'Nickelback', 'Black sabath', 'Nirvana']
    expect(rockBands).toBeArray()
    expect(rockBands).toBeArrayOfSize(4)
  })
})

/* Custom matchers provided by jest-extended */
// .pass(message)
// .fail(message)
// .toBeEmpty()
// .toBeOneOf([members])
// .toBeNil()
// .toSatisfy(predicate)
// Array
// .toBeArray()
// .toBeArrayOfSize()
// .toIncludeAllMembers([members])
// .toIncludeAllPartialMembers([members])
// .toIncludeAnyMembers([members])
// .toIncludeSameMembers([members])
// .toPartiallyContain(member)
// .toSatisfyAll(predicate)
// .toSatisfyAny(predicate)
// Boolean
// .toBeBoolean()
// .toBeTrue()
// .toBeFalse()
// Date
// .toBeDate()
// .toBeValidDate()
// .toBeAfter(date)
// .toBeBefore(date)
// .toBeAfterOrEqualTo(date)
// .toBeBeforeOrEqualTo(date)
// .toBeBetween(startDate, endDate)
// Further proposals in #117 PRs welcome
// Function
// .toBeFunction()
// .toThrowWithMessage()
// Mock
// .toHaveBeenCalledBefore()
// .toHaveBeenCalledAfter()
// .toHaveBeenCalledOnce()
// Number
// .toBeNumber()
// .toBeNaN()
// .toBeFinite()
// .toBePositive()
// .toBeNegative()
// .toBeEven()
// .toBeOdd()
// .toBeWithin(start, end)
// .toBeInteger()
// Object
// .toBeObject()
// .toBeEmptyObject()
// .toContainKey(key)
// .toContainKeys([keys])
// .toContainAllKeys([keys])
// .toContainAnyKeys([keys])
// .toContainValue(value)
// .toContainValues([values])
// .toContainAllValues([values])
// .toContainAnyValues([values])
// .toContainEntry([key, value])
// .toContainEntries([[key, value]])
// .toContainAllEntries([[key, value]])
// .toContainAnyEntries([[key, value]])
// .toBeExtensible()
// .toBeFrozen()
// .toBeSealed()
// Promise
// .toResolve()
// .toReject()
// String
// .toBeString()
// .toBeHexadecimal(string)
// .toBeDateString(string)
// .toEqualCaseInsensitive(string)
// .toStartWith(prefix)
// .toEndWith(suffix)
// .toInclude(substring)
// .toIncludeRepeated(substring, times)
// .toIncludeMultiple([substring])
// .toEqualIgnoringWhitespace(string)
