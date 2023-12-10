let quote1 = "Life is a race. Be racist."
let quote2 = "HE JUST TURNED IN ON ME MATE! FUCKING IDIOT"
let quote3 = "All the time you have to leave a space!! All the time you have to leave space!!"
let quote4 = "I GOT NO BRAKES! ..... - Stop the car "
let quote5 = "TAKE A LOOK AT WHAT HE DID I'VE NEVER SEEN ANYTHING LIKE THAT BEFORE. YOU MADE THE TRANSFER, YOU MADE THE TRANSFER MAN!!"

let randomizer = Math.random() * 10
console.log(randomizer)
bruh.addEventListener("click", function(){
    if (randomizer > 1 && randomizer < 2) {
          document.getElementById("quote").innerText = quote1 ;
    } else if (randomizer > 2 && randomizer < 3) {
        document.getElementById("quote").innerText = quote2 ;
  } else if (randomizer > 4 && randomizer < 5) {
    document.getElementById("quote").innerText = quote3 ;
} else if (randomizer > 6 && randomizer < 7) {
    document.getElementById("quote").innerText = quote3 ;
} else if (randomizer > 8 && randomizer < 9) {
    document.getElementById("quote").innerText = quote4 ;
} 
  console.log(randomizer)
})
