// goal is to check if and array of strings are palindromes and return an array of t/f
// example ['Aba', 1234, '!abba'] would be [true, false, true] 

const isPalindrome = (arr) => {
  const trueFalseArr = arr.map(str => {
    const cleanStr = str.toLowerCase().replace(/([^a-z|0-9])/g, '');

    let start = 0;
    let end = cleanStr.length;
    let isTrue = true;

    while (start < end) {
      
      if(cleanStr.charAt(start) !== cleanStr.charAt(end -1)) {
        isTrue = false;
      };

      start++;
      end--;
    }

    return isTrue;

  });
  return trueFalseArr;
}

module.exports = { isPalindrome };
