const {isPalindrome }= require('../palindrome');

describe('palindrome tests', () => {
  it('should return true for a basic palindrome', () => {
    const arr = ['abccba'];

    const actual = isPalindrome(arr);
    const expected = [true];
    
    expect(actual).toEqual(expected);
  });

  it('should remove punctuation', () => {
    const arr = ['!abccba.'];

    const actual = isPalindrome(arr);
    const expected = [true];
    
    expect(actual).toEqual(expected);
  });

  it('should be case insensitive', () => {
    const arr = ['ABccba'];

    const actual = isPalindrome(arr);
    const expected = [true];
    
    expect(actual).toEqual(expected);
  });

  it('should work with odd number of letters', () => {
    const arr = ['abcba'];

    const actual = isPalindrome(arr);
    const expected = [true];
    
    expect(actual).toEqual(expected);
  });

  it('should be false with non palindrome', () => {
    const arr = ['potato'];

    const actual = isPalindrome(arr);
    const expected = [false];
    
    expect(actual).toEqual(expected);
  });

});
