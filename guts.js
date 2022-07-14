const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];

let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")

password.addEventListener("click", function() {
    const randomOne = Math.floor(Math.random() * characters.length)
    const randomTwo = Math.floor(Math.random() * characters.length)
    optionOne.textContent = `${characters[randomOne]}`
    optionTwo.textContent = `${characters[randomTwo]}` 
})

//what i found online, then rewatched array videos:
// randomly generated N = 40 length array 0 <= A[N] <= 39
//Array.from({length: 40}, () => Math.floor(Math.random() * 40));


//these v is the closest i could come up with but they didnt work

   // const randomOne = Math.floor(Math.random() * characters.length[8]) 
   // const randomTwo = Math.floor(Math.random[8]() * characters.length)
    //const randomOne = Math.floor(Math.random() * characters.length) +[8]
    //const randomTwo[8] = Math.floor(Math.random() * characters.length)
//const randomOne = Math.floor[8](Math.random() * characters.length) 