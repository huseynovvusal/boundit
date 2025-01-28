import { upperBound } from '../src';

describe('upperBound', () => {
    it('should return the correct index of the first element greater than the target', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 4;
        const index = upperBound(array, target);
        expect(index).toBe(4);
    });

    it('should return the length of the array if no element is greater than the target', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 7;
        const index = upperBound(array, target);
        expect(index).toBe(6);
    });

    it('should handle large arrays efficiently', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 50000;
        const index = upperBound(array, target);
        expect(index).toBe(50001);
    });

    it('should return the length of a large array if no element is greater than the target', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 10**5;
        const index = upperBound(array, target);
        expect(index).toBe(10**5);
    });
});