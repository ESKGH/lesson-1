
let x = 20
let y = 58
let z = 42
let sum = x + y + z
console.log(sum);


let seconds = 1
let minute = 60 * seconds
let hour = 60 * minute
let day = 24 * hour
let year = 365 * day

myAgeInSeconds = 23 * year 
console.log(myAgeInSeconds);

let count = 42
let count_String = String(count)
console.log(typeof count_String + count_String)
let count_String_2 = count.toString()
console.log(typeof count_String_2 + count_String_2)
let userName = '42'
let userName_Number = Number(userName)
console.log(typeof userName_Number + userName_Number)
let userName_Number_2 = BigInt(userName)
console.log(typeof userName_Number_2 + userName_Number_2);

let a = 1
let b = 2
let c = 'белых медведей'

let text = a.toString() + b.toString() + ' ' + c
console.log(text);



let word1 = "морпех"
let word2 = "наледь"
let word3 = "попрек"
let word4 = "рубило"

let lengthWord1 = word1.length;
let lengthWord2 = word2.length;
let lengthWord3 = word3.length;
let lengthWord4 = word4.length;

let lengthWords = lengthWord1 + lengthWord2 + lengthWord3 + lengthWord4
console.log(lengthWords);



let stringVariable = "Privet!"
let numberVariable = 42
let booleanVariable = true

console.log(`Variable: %stringVariable% have type: %${typeof stringVariable}%`)
console.log(`Variable: %numberVariable% have type: %${typeof numberVariable}%`)
console.log(`Variable: %booleanVariable% have type: %${typeof booleanVariable}%`);







let a1 = 4
let b1 = 3
a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1

console.log("a1 =", a1) 
console.log("b1 =", b1); 



let codeWord1 = "обернись"
let codeWord2 = "неужели"
let codeWord3 = "огурцы"
let codeWord4 = "липкие"
let codeWord5 = "?!"

let cipher = codeWord1[1] + codeWord2 [1] +codeWord3 [1] + codeWord4 [1] + codeWord5 [1]
console.log(cipher);


const NewUsername = prompt("Пожалуйста, введите ваше имя:")
const NewUserage = prompt("Пожалуйста, введите ваш возраст:")

console.log("Имя пользователя: " + NewUsername)
console.log("Возраст пользователя: " + NewUserage);

