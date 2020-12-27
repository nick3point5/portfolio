// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

function printGreeting(name) {
    return `Hello there, ${name}!`
}

console.log(printGreeting("Slimer"));

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(inp) {
    let ans = ''
    const words = inp.split(" ")
    for (let i = words.length; i > 0; i--) {
        ans += (words[i-1])+" ";
    }
    return ans
}


console.log(reverseWordOrder("Ishmael me Call"));

// 3. calculate
// Write a function called calculate.

// This function should take three arguments: two numbers and a string.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// If if the function is called with the third argument as "sub", it should return return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

function calculate(a,b,oper) {
    let ans = null
    if (oper === 'add') {
        ans = a+b
    } else if (oper === 'sub') {
        ans=a-b
    } else if (oper === 'mult') {
        ans=a*b
    } else if (oper === 'div') {
        ans=a/b
    } else if (oper === 'exp') {
        ans=a**b
    }
    return ans
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));

// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

function pandigital(num) {
    const digits = [...num+'']
    const ordig=digits.sort()
    let panstatus=true
    for (let i = 0; i < ordig.length-1; i++) {
        if (ordig[i+1]-ordig[i] !== 1) {
            panstatus=false
        }
    }
        if(panstatus){
            console.log(`${num} is pandigital`)
        } else {
            console.log(`${num} is not pandigital`)
        }
        return panstatus
}

// 5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().

// Usage:

// 	const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.

// Let's revisit printGreeting.

// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.

const userInput = prompt("Please enter some input");

function printGreeting2(name) {
    alert(`Hey there ${name}`)
}

printGreeting2(userInput)

