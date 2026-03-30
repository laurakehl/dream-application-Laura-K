// Instructions
// Now that you have completed Unit 0, you have a solid foundation in the different tools developers use to build applications using JavaScript.  So it’s time to start thinking about applications to develop!  

// For this activity, think about an application that you have always wanted to exist–or about features you would like to add or change on an existing application.  Next, consider the skills you have learned from each module of the course and write a description of how you could use those skills to create or update your app.  Finally, write code examples to represent one use case for the skills from each module.



//         MY CODE 


// Basic PsudeoCode: 

//START
    //GET spot to hold 20 short sentences
    
    //GET spot to hold 10 short yes sentences 
    //PLACE yes sentences in spot

    //GET spot to hold 5 short nuetral sentences 
    //PLACE nuetral sentences in spot

    //GET spot to hold 5 short no sentences 
    //PLACE no sentences in spot 

    //PLACE yes, nuetral, and no sentences in spot that holds 20 sentences 

    //GREET user 
    //ASK user to type their yes/no quesiton

      //IF NOT yes/no question
            //ASK user to retype their question 
        //IF yes/no question
            //GET response from spot
      
        //END IF
    
    //DISPLAY yes/nuetral/no question 

// STOP 




//This section I am going to show how to create an empty array. We will be using this later 

const totalResponsesArr = Array();

// (BUILDING ARRAYS) I am creating an empty array for data that I know is coming later. 

//console.log(totalResponsesArr); // checking that this array was built correcrtly, output <20 empty spaces 

// This section I am showing how to build arrays, this is where I will be houseing my Magic-8 Ball responses
let positiveResponses = [ // (BUILDING ARRAYS) created an array for positive responeses, 10 total, used this format for readability, 'let' creates a variable that we may need to change over time 
    "It is certain.",
    "It is decidely so.",
    "Without a doubt.",
    "Yes Definietly.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
];

//console.log(positiveResponses[7]); //  checking that array was built correctly, should output "outlook good"

let nuetralResponses = [  // (BUILDING ARRAYS)
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate & ask again.",
];

//console.log(nuetralResponses[0]); //checking that array was built correcrly, should output "reply hazy, try again."

let negativeResponses = [ // (BUILDING ARRAYS)
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

//console.log(negativeResponses[4]); // (CONTROL STRUCTURES & LOGIC - Debuggign) As I am creating code, I console.log throughtout the process to make sure that it is working how I intedned before moving to the next step.  checking that array was built correcrly, should output "Very doubtful"

totalResponsesArr.push(positiveResponses, nuetralResponses, negativeResponses); // fills empty array with three subarrays built
//console.log(totalResponsesArr); // checking to see that three arrays were put into the empty array 


// This section I am showing how to console.log a string, how to add a readline-sync for ujser input, and how to prompt a user for their input

const readline = require('readline-sync'); // (VALUES, DATASETS, AND OPERATIONS) allows us to gather input from the user, 'const' creates a variable that cannot be changed  

let magicGreeting = `Greetings. I am the Magic 8-Bit Ball. /u1F52E` // (STRINGING CHARACTERS TOGETHER), unicode for crystal ball emoji with back slash to escale quotations, this will console.log the emoji and not the unicode 
console.log(magicGreeting);


let userName = readline.question("What is your name?");// let creates a variable that we know may change over time &  prompts the user to type their name, and stores it as userName

//console.log(`Hi, ` + userName); // I am putting this code in notes, may come back to it later. (VALUES, DATASETS, AND OPERATIONS. USING  STRING CONCATENATION WITH +) displays message back to user with the name they entered 

console.log (userName + `, ask me any question you wish. However, there is one condition. It must asked in a way that can be answered with a yes or no.`); //(VALUES, DATASETS, AND OPERATIONS. USING  STRING CONCATENATION WITH +) displays message back to user with the name they entered =


let ueserQuestion = readline.question("What is your question:"); //

function getRandomNested(arr) {    // (USING ARRAYS) because I used a nested array to house my answers with the three subarrays, we need to find a random answer by randomly choosing one of the nested arrays, and then randomly using on the answers from that array. 
  const group = arr[Math.floor(Math.random() * arr.length)];  
  return group[Math.floor(Math.random() * group.length)];
}

console.log(getRandomNested(totalResponsesArr));  // presents user with their random (but totally real, clairvoyant response (sarcasm)).  


//I think in the future I would add a loop here that would prompt the user if they have another quesiton and they don't have to go through the whole code again and give their name, that would be tiresome and not user freindly 


