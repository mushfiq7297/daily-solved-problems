'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI; // Declare PI as a constant
    let r = parseFloat(readLine()); // Read input and convert it to a number
    
    // Calculate the area and perimeter of the circle
    let area = PI * r * r;
    let perimeter = 2 * PI * r;
    
    // Print the area of the circle
    console.log(area);
    
    // Print the perimeter of the circle
    console.log(perimeter);
    // Print the area of the circle:
    
    // Print the perimeter of the circle:

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}