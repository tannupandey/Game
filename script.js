//  var imgUrls=[
//     "/images/dice1.png",
//     "/images/dice2.png",
//     "/images/dice3.png",
//     "/images/dice4.png",
//     "/images/dice5.png",
//     "/images/dice6.png"
//  ]
 
//     var randomNumber=Math.floor(Math.random()*6)+1;
//     var randomNumber2=Math.floor(Math.random()*6)+1;
    
// console.log(`randomNumber1 ${randomNumber}`);
//if we would have given both the images id so we could have accessed them separately by respective ids
// document.getElementById("img1").setAttribute("src",imgUrls[randomNumber-1]);
// document.getElementById("img2").setAttribute("src",imgUrls[randomNumber2-1]);

//2nd way by  usnig querySelectorAll
//querySelectorAll gives the array of all the classes inside an attribute

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];  //first img class
image1.setAttribute("src",randomImageSource);
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!🏁";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!🏁";
}else{
    document.querySelector("h1").innerHTML="Draw";
}
