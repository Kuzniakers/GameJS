// Prosta gra w JavaScript

var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var i = 0;
var czyZgadl = false;

var los = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", sprawdz);

function sprawdz() 
{
  if (czyZgadl) 
  {
    return;
  }
  
  var value = Number(input.value);
  if (Number.isInteger(value) && value >= 1 && value <= 10)
   {
    i++;

    if (los > value) 
    {
      answer.innerHTML = "Wylosowana liczba jest większa od Twojej!";
    } 
    else if (los < value) 
    {
      answer.innerHTML = "Wylosowana liczba jest mniejsza od Twojej!";
    } 
    else 
    {
      answer.innerHTML = "Brawo ! Udało Ci się odgadnąć liczbę za " + i + " razem";
      answer.classList.add("good");
      button.innerHTML = "Odśwież";
      button.removeEventListener("click", sprawdz);
      button.addEventListener("click", odswiez);
      czyZgadl = true;
    }

    var li = document.createElement("li");
    list.appendChild(li);
    list.lastChild.innerHTML = i.toString() + ": " + value;
  } 
  else 
  {
    alert("Błędna liczba!");
  }
}

function odswiez() 
{
  location.reload();
}

input.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") {
    button.click();
  }
});
