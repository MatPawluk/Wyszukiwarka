/*
co pobrać:
    input
    ul list
    li

Zastanów się jakich elementów będziesz potrzebował/a 
(jakie elementy będziesz musiał/a pobrać za pomocą np. querySelectora).

Stwórz funkcję, która będzie się odpalała, kiedy wpiszemy coś do inputa.

Funkcja ma porównywać to, co wpisaliśmy w inputa z każdym napojem na liście.

Za pomocą instrukcji warunkowej sprawdź, czy dane z inputa pokrywają się z nazwą napoju. 
Jeśli nie, ukryj taki napój.

Żeby aplikacja działała poprawnie, musimy się zabezpieczyć. 
Użytkownik może podać nazwę napoju dużymi lub małymi literami. 
Musimy więc sprowadzić to, co wpisuje użytkownik do np. małych liter 
(tak samo trzeba zrobić z listą napojów).
*/

const input = document.querySelector(".search");
const drinkNames = document.querySelectorAll("li");

const search = () => {
  const name = input.value.toLowerCase();

  drinkNames.forEach((drinkName) => {
    if (drinkName.textContent.toLowerCase().includes(name)) {
      drinkName.style.display = "";
    } else {
      drinkName.style.display = "none";
    }
  });
};

input.addEventListener("keyup", search);
