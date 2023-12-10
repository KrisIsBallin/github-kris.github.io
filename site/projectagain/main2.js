let clicker = document.querySelector("#clicker")


let score = 0 // ok from now on i'll be commenting this shit on english because like i dont wanna switch to russian by using shortcuts i hope you understand this is score btw
let plus = 1 // amount of shit per click its like yeah
let monisec = 30 //i mean you probably understand its like MONEY PER second
let joe = plus * 2 // joe multiplication shit
let john = plus * 10 // kennedy multiplication shit
let trump = plus * 100 // trump multiplication shit
let trumpcost = 5000   // trumps cost
let printercost = 2000 // printer cost nig
let joecost = 69 // joe mama cost
let johncost = 500 // kennedy cost




let localscore = localStorage.getItem("score")

score = JSON.parse(localscore)

console.log(localStorage);

document.getElementsByTagName("h2")[0].firstChild.data = score + "$";




upgrade1.addEventListener("click", function(){  //so this shit basically like ладно я устал использовать английский крч \та функция проверяет есть ли бабки и если да добавляет колво бабок за клик (выдает уведомления тоже)
    if (score >= joecost){
        score -= joecost
        plus = plus + joe
        

        document.getElementById("score").innerText = score + "$";
        alert("bought succesfully!")
    } else {
        alert("not enough dorras (moni)")
    }
})

upgrade2.addEventListener("click", function(){ // то же самое вчто и сверъу только другие числа для кеннеди
    if (score >= johncost){
        score -= johncost
        plus = plus + john
        document.getElementById("score").innerText = score + "$";
        alert("bought succesfully!")
    } else {
        alert("not enough dorras (moni)")
    }
})
upgrade3.addEventListener("click", function(){ // также как и первые два добавляет бабки за клик и проверяет есть ли бабки
    if (score >= trumpcost){
        score -= trumpcost
        plus = plus + trump
        document.getElementById("score").innerText = score + "$";
alert("bought succesfully!")
    } else {
        alert("not enough dorras (moni)")
    }
})


upgrade.addEventListener("click", function(){ // автокликер йоу проверяет если да то включает функцию автокликера через setinterval
    if (score >= printercost){
        score -= printercost
        

setInterval(function() { 
	score += monisec ; 
	
	document.getElementById("score").innerText = score + "$"; 
}, 1000) // 1000 милисек - 1 сек



alert("bought succesfully!")
    } else {
        alert("not enough dorras (moni)")
    }
})




clicker.addEventListener("click", function(){  // сам кликер работает по выбору первого обькета с h2 и добавляет значение скор к плюсу и значек доллара потому что мони 
    score = score + plus
    document.getElementsByTagName("h2")[0].firstChild.data = score + plus + "$";
    localStorage.setItem("score", JSON.stringify(score))
    console.log(localStorage)
})



