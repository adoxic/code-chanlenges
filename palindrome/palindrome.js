// goal is to check if and array of strings are palindromes and return an array of t/f
// example ['Aba', 1234, '!abba'] would be [true, false, true] 

const isPalindrome = (arr) => {
  const trueFalseArr = arr.map(str => {
    const cleanStr = str.replace('/!|.|,|?/g', '');
    let start = 0;
    let end = cleanStr.length;

    while(start > end) {
      if(cleanStr.charAt(start) !== cleanStr.charAt(start)) return false;
      start++;
      end--;
    }

    return true;

  });
}

module.exports = { isPalindrome };
