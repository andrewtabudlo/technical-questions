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
  