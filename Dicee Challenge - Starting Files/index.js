
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice"+randomNumber+".png";
var randomImage = "images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);
 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1= "dice"+randomNumber1+".png";
var randomImage1="images/"+randomDice1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);