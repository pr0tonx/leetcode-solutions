// Example 1:
//
// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
// Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
//     At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
//     Example 2:
//
// Input: nums = [2,5]
// Output: [5,2]
// Explanation: In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].

const f = require('./2974-minimum-number-game');

test('should number game function returns "[3, 2, 5, 4]"', () => {
    const nums = [5, 4, 2, 3];

    const res = f.numberGame(nums);

    expect(res).toEqual([3, 2, 5, 4]);
});

test('should number game function returns "[5, 2]"', () => {
    const nums = [2, 5];

    const res = f.numberGame(nums);

    expect(res).toEqual([5, 2]);
});