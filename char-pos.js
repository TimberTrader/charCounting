// let str = 'lighthouse in the house'

function posLetters(str) {
  var result = {}
  for (var i = 0; i < str.length - 1; i++) {
    var currentLetter = str.charAt(i);

    if (result[currentLetter]) {
      result[currentLetter].push(i)
    }  else {
       result[currentLetter] = [i]
    }
  }
  return result;
}

console.log(posLetters(str));