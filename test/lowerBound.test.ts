import { lowerBound } from '../src';

describe('lowerBound', () => {
    it('should return the correct index of the first element greater than or equal to the target', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 6;
        const index = lowerBound(array, target);
        expect(index).toBe(5);
    });

    it('should return the length of the array if no element is greater than or equal to the target', () => {
        const array = [1, 2, 4, 4, 5, 6];
        const target = 7;
        const index = lowerBound(array, target);
        expect(index).toBe(6);
    });

    it('should handle large arrays efficiently', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 50000;
        const index = lowerBound(array, target);
        expect(index).toBe(50000);
    });

    it('should return the length of a large array if no element is greater than or equal to the target', () => {
        const array = Array.from({ length: 10**5 }, (_, i) => i);
        const target = 10**5;
        const index = lowerBound(array, target);
        expect(index).toBe(10**5);
    });
});