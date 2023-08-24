/* Consider a string S, that is a series of characters, each followed by its frequency as an integer.The string is not compressed correctly, so there may be multiple occurrences of the
same character. A properly compressed string will consist of one instance of each character in
alphabetical order followed by the total count of that character within the string.

Example

The string 'a3c9b2c1' has two instances where 'c' is followed by a count: once with 9 occurences and
again with 1. It should be compressed to 'a3b2c10'. */

function compressString(s) {
    const charCountMap = new Map();
  
    // Parse the input string and populate the character count map
    let i = 0;
    while (i < s.length) {
      const char = s[i];
      let count = '';
      
      while (i + 1 < s.length && /^\d$/.test(s[i + 1])) {
        count += s[i + 1];
        i++;
      }
  
      count = parseInt(count || '1', 10); // Default to 1 if count is empty
      charCountMap.set(char, (charCountMap.get(char) || 0) + count);
      i++;
    }
  
    // Sort the characters alphabetically
    const sortedChars = Array.from(charCountMap.keys()).sort();
  
    // Compose the compressed string
    let compressed = '';
    for (const char of sortedChars) {
      const count = charCountMap.get(char);
      compressed += char + count;
    }
  
    return compressed;
  }
  
  const input = 'a12c56a12c5a2b4a7';
  const compressedOutput = compressString(input);
  console.log(compressedOutput);