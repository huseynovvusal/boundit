# Boundit

[![npm version](https://badge.fury.io/js/boundit.svg)](https://badge.fury.io/js/boundit)
[![npm downloads](https://img.shields.io/npm/dm/boundit.svg)](https://www.npmjs.com/package/boundit)
[![License](https://img.shields.io/npm/l/boundit.svg)](https://github.com/huseynovvusal/boundit/blob/main/LICENSE)

🔍 JavaScript and TypeScript implementation of `lower_bound` and `upper_bound` for efficient data searching.

## Installation

You can install the package using npm:

```bash
npm install boundit
```

## Usage

### lowerBound

Returns the index of the first element in the array which is greater than or equal to the target.

```typescript
import { lowerBound } from 'boundit';

const array = [1, 2, 4, 4, 5, 6];
const target = 4;
const index = lowerBound(array, target);

console.log(index); // Output: 2
```

### upperBound

Returns the index of the first element in the array which is greater than the target, or the length of the array if no such element is found.

```typescript
import { upperBound } from 'boundit';

const array = [1, 2, 4, 4, 5, 6];
const target = 4;
const index = upperBound(array, target);

console.log(index); // Output: 4
```

### binarySearch

Binary search is a fast search algorithm with run-time complexity of O(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.

```typescript
import { binarySearch } from 'boundit';

const array = [1, 2, 4, 4, 5, 6];
const target = 5;
const index = binarySearch(array, target);

console.log(index); // Output: 4
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Author

Vusal Huseynov

## Links

- [Repository](https://github.com/huseynovvusal/boundit)
- [Issues](https://github.com/huseynovvusal/boundit/issues)
- [Readme](https://github.com/huseynovvusal/boundit#readme)