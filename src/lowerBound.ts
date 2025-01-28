/**
 * Returns the index of the first element in the array which is greater than or equal to the target.
 *
 * @param {number[]} array - a sorted array
 * @param {number} target - the target value to search for
 * @returns {number} - the index of the first element in the array which is greater than or equal to the target, or the length of the array if no such element is found.
 */
export const lowerBound = (array: number[], target: number): number => {
    let left = 0;
    let right = array.length;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}