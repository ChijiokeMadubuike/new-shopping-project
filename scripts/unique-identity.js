

let alphaNumber = []


const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function generateId(){

let randomTo25;
let eachIndex;
let eachIndexId;

let firstNUmbers = (Math.random()*1000).toFixed(0);

let secondNUmbers = (Math.random()*1000).toFixed(0);

let charSet = ''; 
let secondCharSet = '';

for(i = 0; i<=2; i++){

randomTo25 = Math.floor(Math.random()*26);


alphabets.forEach((char, index)=>{

eachIndex = index;

if(eachIndex === randomTo25){

  charSet +=char;

}

})



}


for(i = 0; i<=2; i++){

randomTo25 = Math.floor(Math.random()*26);

  alphabets.forEach((charSecond, index)=>{

eachIndexId = index;

if(eachIndexId === randomTo25){

  secondCharSet +=charSecond;

}

})

}

console.log(firstNUmbers+ '-' + charSet+ '-' + secondNUmbers + '-' + secondCharSet );
}

generateId();






