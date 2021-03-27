// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну
// операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const elements = ingredients.map(currentValue => {
  const listEl = document.createElement("li");
  listEl.textContent = currentValue;
  return listEl;
});

document.querySelector("#ingredients").append(...elements);
