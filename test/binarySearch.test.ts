import { binarySearch } from '../src';

describe('binarySearch', () => {
    it('should return the correct index of the target value', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 5;
        const index = binarySearch(array, target);
        expect(index).toBe(4);
    });

    it('should return -1 if the target value is not found', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 3;
        const index = binarySearch(array, target);
        expect(index).toBe(-1);
    });

    it('should handle large arrays efficiently', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 99999;
        const index = binarySearch(array, target);
        expect(index).toBe(99999);
    });

    it('should return -1 for a target not in a large array', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 10**5;
        const index = binarySearch(array, target);
        expect(index).toBe(-1);
    });
});