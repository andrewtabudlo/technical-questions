    // Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. 
    // You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
    // For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

    let sortByStrings = (s, t) => {
      answer = []

      // split s by each letter into array
      sarr = s.split("")

      // split t by each letter into array
      tarr = t.split("")

      // forEach letter in t check if exists in s
      tarr.forEach(function(e){
          for (i = 0; i < sarr.length; i++){
          // if does exist then place into answer array
              if (e == sarr[i]) {               
                  answer.push(sarr[i]);
              }
          }
      });

      // output answer array
      return(answer.join(""));
  }

  // Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

  // The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. 
  // Note: k is guaranteed to be a positive integer.

  // For s = "4[ab]", the output should be decodeString(s) = "abababab"
  // For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

  let decodeString = (s) => {
      // while encoding rule pattern still exists
      while (/\d\[([a-z])*\]/.test(s) === true){
          // use regex find encoding pattern: number bracket string bracket
          let pattern = s.match(/\d\[([a-z])*\]/)[0]
          // remove closing bracket
          pattern = pattern.replace(/\]/, "")
          // split by bracket into number and string
          pattern = pattern.split(/\[/)
          // use repeat method to repeat letter strings by the number in regex search
          let decodedPattern = pattern[1].repeat(pattern[0])
          // replace pattern in original string
          s = s.replace(/\d\[([a-z])*\]/, decodedPattern)
      }
      return s
  }

  // Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. 
  // They found out you're a programmer and asked you to solve something they've been wondering for a long time.

  // Write a function that, given an amount of money and an array of coin denominations, 
  // computes the number of ways to make the amount of money with coins of the available denominations.

  // Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

  // 1¢, 1¢, 1¢, 1¢
  // 1¢, 1¢, 2¢
  // 1¢, 3¢
  // 2¢, 2¢

  var denominations = [1, 2, 3]; //length = 3
  var changeAmount = 4;

  function changePossibilities(changeAmount){

      var cLen = denominations.length,
      matrix = Array(cLen),
      mLen = matrix.length,
      prevPerms;
  
      for(var x = 0; x <= mLen; x++){
          matrix[x] = Array(total+1);
      }
  
      for(var z = 0; z <= mLen; z++){
          matrix[z][0] = 1;
      }

      for(var a = 1; a <= cLen; a++){
        for(var b = 1; b <= total; b++){
          matrix[0][b] = 0;
          prevPerms = matrix[a-1][b];
          prevPerms += denominations[a-1] <= b ? matrix[a][b-denominations[a-1]] : 0;
          matrix[a][b] = prevPerms;
        }
      }
      return matrix[cLen][total];
  }

