let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let char = text.charAt(5);
console.log(char);
let char1 = text.charCodeAt(23);
console.log(char1);
let char2 = text.at(-3);
console.log(char2);

// Extractiong String Parts
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let char21 = text1.slice(2, -5)
console.log(char21);
let char22 = text1.substring(2, 5)
console.log(char22);
let char23 = text1.substr(2)
console.log(char23);


// Concat
let chat1 = "Hello! I know you are not telling me the truth. Please tell me...";
let chat2 = "Not is not like that. I already tell you the truth."
let chat3 = "hmm, so what do you think about this is the name of the person"

let chat4 = chat1.concat("\n", chat2, "\n", chat3);
console.log(chat4);
let chat5 = chat2.repeat(2);
console.log(chat5);

