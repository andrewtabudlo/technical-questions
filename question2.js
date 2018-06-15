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
