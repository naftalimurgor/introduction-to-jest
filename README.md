# Introduction to testing with Jest 💅
[Blog article](https://naftalimurgor.com/unit-testing-with-jest/)

## Getting started
1. Clone repo:
```sh
git clone https://naftalimurgor.com/unit-testing-with-jest
```
2. Install dependencies:
```sh
npm install
```
3. Run the test:
```sh
npm test
```
4. Add more tests and tinker around with various custom matchers:
```javascript
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
```
## Covers
1. Generating `jest.config.ts` file, handles project wide `jest` custom configuration
2. Using custom matchers provided by [jest-extended](https://github.com/jest-community/jest-extended#readme)
3. Default matchers provided by jest [using matchers](https://jestjs.io/docs/using-matchers)
4. Testing asynchronous code - `async/await`

## More about setting up Jest with TypeScript
[Using TypeScript](https://jestjs.io/docs/getting-started#using-typescript)
