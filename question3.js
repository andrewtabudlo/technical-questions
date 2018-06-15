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
