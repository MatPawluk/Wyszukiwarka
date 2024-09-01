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
