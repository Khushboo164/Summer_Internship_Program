//way to create string 1
//string can be declared in " ", ' ', ` `.
let a = "nisha🎀";
console.log(a);

//way to create string 2 as a object because of new
let b = new String("jayant");
console.log(b)

const c = "star of the class"
console.log(c);
console.log(c.length);
console.log(c[3]);
console.log(c.charAt(5));

//adding to strings
const d = "hello, ";
const f = "welcome!"
console.log( d + f);

//substring
console.log(c.substring(2,6));//does not counts 6 ending number

let g = '       iphone     ';
console.log(g);
console.log(g.trimEnd()); //removes all the gap from end
console.log(g.trimStart()); //removes all gap from start
console.log(g.trim()); // removes all gap