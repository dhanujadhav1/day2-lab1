
// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var proGrad1 = "charith";
var proGrad2 = "dhananjay";

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (proGrad2.length > proGrad1.length) {
    document.getElementById("div1").innerHTML = "Nevigator has the longest name";

}
else if (proGrad1.length == proGrad2.length) {
    document.getElementById("div1").innerHTML = " both have the same length name";
}
else {
    document.getElementById("div1").innerHTML = "Driver has longest name";
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
var vowels = ['a', 'e', 'i', 'o', 'u'];
var count;
var output = "";
var counts = [];
for (let i = 0; i < 5; i++) {
    count = 0;
    for (let j = 0; j < proGrad1.length; j++)
        if (proGrad1[j] == vowels[i])
            count++;
    counts[i] = count;
    output = output + vowels[i] + " found " + count + " times.  ";
    document.getElementById("div2").innerHTML = output;

}
output = "";
for (let i = 0; i < 5; i++) {
    count = 0;
    for (let j = 0; j < proGrad2.length; j++)
        if (proGrad2[j] == vowels[i])
            count++;
    counts[i] = count;
    output = output + vowels[i] + " found " + count + " times.  ";
    document.getElementById("div3").innerHTML = output;
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var count4upper = 0;
var count4lower = 0;
for (let j = 0; j < proGrad1.length; j++) {
    if (proGrad1[j] == proGrad1[j].toUpperCase()) {
        count4upper++;

    }
    if (proGrad1[j] == proGrad1[j].toLowerCase()) {
        count4lower++;
    }
}

document.getElementById("div4").innerHTML = "there are " + count4upper + " uppercase letters";
document.getElementById("div5").innerHTML = "there are " + count4lower + " lowercase letters";

count4upper = 0;
count4lower = 0;
for (let j = 0; j < proGrad2.length; j++) {
    if (proGrad2[j] == proGrad2[j].toUpperCase()) {
        count4upper++;

    }
    if (proGrad2[j] == proGrad2[j].toLowerCase()) {
        count4lower++;
    }
}
document.getElementById("div6").innerHTML = "there are " + count4upper + " uppercase letters";
document.getElementById("div7").innerHTML = "there are " + count4lower + " lowercase letters";
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let letter = "";
for (letter of proGrad1.toUpperCase())
    console.log(letter);

document.getElementById("div7").innerHTML = letter;
letter = "";
for (letter of proGrad2.toUpperCase())
    console.log(letter);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for (let j = proGrad1.length - 1; j >= 0; j--) {
    console.log(proGrad1[j]);
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(proGrad1 + " " + proGrad2);
console.log(proGrad2 + " " + proGrad1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
