/**
 * Binary search is a fast search algorithm with run-time complexity of O(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.
 *
 * @param {number[]} array - a sorted array
 * @param {number} target - the target value to search for
 * @returns {number} - the index of the target value in the array, or -1 if the target value is not found.
 */
export const binarySearch = (array: number[], target: number): number => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}