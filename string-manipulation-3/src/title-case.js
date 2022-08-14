/* exported titleCase */

// make function to capitalize word
// make function to deal with hypenated capitalization
// make function to deal with words with colon
// lowercase title for ease of comparison
// split title into array of words
// make result variable initiated to empty array
// make an array of minor words to keep track of
// if first word is not a special case
//   capitalize and push to result
// else, deal with special case
// loop through all words after first
// if word is 'javascript', push 'JavaScript' to result
// else if word is 'api', push 'API' to result
// else if word has hyphen, call hypen fx then push return of fx call to result
// else if word has colon, call colon fx then push return of fx call to result
// else if word length is less than 4 and is a minor word, push lower cased word
// else capitalize and push to result
// join result array to string with spaces
// make function to capitalize letter that comes after a colon
// if joined string has a colon, call stringColon fx and reassign string with return of fx call
// return string

function titleCase(title) {
  var lower = title.toLowerCase();
  var words = lower.split(' ');
  var result = [];
  var minorWords = ['and', 'or', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  if (!words[0].includes('javascript')) {
    result.push(capitalize(words[0]));
  } else if (words[0] === 'javascript:') {
    result.push(colon(words[0]));
  }
  for (var i = 1; i < words.length; i++) {
    if (words[i] === 'javascript') {
      result.push('JavaScript');
    } else if (words[i] === 'api') {
      result.push('API');
    } else if (words[i].includes('-')) {
      result.push(hyphen(words[i]));
    } else if (words[i].includes(':')) {
      result.push(colon(words[i]));
    } else if (words[i].length < 4 && minorWords.includes(words[i])) {
      result.push(words[i].toLowerCase());
    } else {
      result.push(capitalize(words[i]));
    }
  }
  var string = result.join(' ');
  if (string.includes(':')) {
    string = stringColon(string);
  }
  return string;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function hyphen(word) {
  var split = word.split('-');
  var hyphen = [];
  for (var i = 0; i < split.length; i++) {
    hyphen.push(capitalize(split[i]));
  }
  return hyphen.join('-');
}

function colon(word) {
  var lower = word.toLowerCase();
  var split = lower.split(':');
  if (split[0] === 'javascript') {
    return 'JavaScript:';
  } else {
    return capitalize(split[0]) + ':';
  }
}

function stringColon(string) {
  var split = string.split(': ');
  return split[0] + ': ' + split[1][0].toUpperCase() + split[1].slice(1);
}
