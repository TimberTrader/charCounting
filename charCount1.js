function letterCount(input) {
    var letters = (input);
    var newLetters = letters.replace(/\s/g, "");
    
      let newerLetters = newLetters.split("").sort().join("");
      let counter = 1;
      const result = {};
    
      for (let i = 0; i < newerLetters.length; i++) {
        var char = newerLetters[i];
        if (char == newerLetters[i + 1]) {
          counter++;
          result[char] = counter;
        } else {
          //newestLetter =(newerLetters[i] + ":" + counter);
          counter = 1;
          if (!result[char]) result[char] = counter;
        }
      }
    
      return result;
    }
    
    console.log(letterCount("Lighthouse in the house"));