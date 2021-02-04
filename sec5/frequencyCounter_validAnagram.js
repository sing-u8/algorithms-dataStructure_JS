/*
	Frequency Counter - ValidAnagram

	Given two strings, write a function to determine if the second string is an anagram of the first.
	An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

	EX.
	validAnagram('','') true
	validAnagram('aaz','zza') false
	validAnagram('anagram','nagaram') true
	validAnagram('rat','car') false
	validAnagram('awesome','awesom') false

	Note: you may assume the string contains only lowercase alphabets.

	Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let strObj1 = {};
  let strObj2 = {};
  if (str1.length !== str2.length) return false;
  for (let key of str1) {
    strObj1[key] = (strObj1[key] || 0) + 1;
  }
  for (let key of str2) {
    strObj2[key] = (strObj2[key] || 0) + 1;
  }
  for (let key in strObj1) {
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
