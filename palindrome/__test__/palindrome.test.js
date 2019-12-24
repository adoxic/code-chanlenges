const {isPalindrome }= require('../palindrome');

describe('palindrome tests', () => {
  it('should return true for a basic palindrome', () => {
    const arr = ['abccba'];

    const actual = isPalindrome(arr);
    const expected = [true];
    
    expect(actual).toEqual(expected);
  });
});
