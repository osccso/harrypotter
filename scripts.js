var comenzar = document.getElementById("comenzar");
var nuevo = document.getElementById("nuevo");
var logo = document.getElementById("logo");
var character = document.getElementById("character");
var housename = document.getElementById("house");
var nameCharacter =document.getElementById("nameCharacter");
var windowm = document.getElementById("window");

comenzar.addEventListener("click",start);
nuevo.addEventListener("click",next);

function generateRandomInteger(max)
{
    return Math.floor(Math.random()*max)+1;
}
function newCharacter()
{
    randomnum = generateRandomInteger(10)-1;
    nombre=names[randomnum];
    casa=houses[randomnum];
    imagen=images[randomnum];
    nameCharacter.innerHTML=nombre;
    housename.innerHTML=casa;
    character.src="./characters/"+imagen;
    logo.src="./logos/"+casa+".png";
}
function start()
{
    comenzar.style.visibility="hidden";
    nuevo.style.visibility="visible";
    windowm.style.visibility="visible";
    newCharacter();    
}
function next()
{
    newCharacter(); 
}