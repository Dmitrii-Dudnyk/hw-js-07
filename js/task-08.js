// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// ---Имеет случайный rgb цвет фона
// ---Размеры самого первого div - 30px на 30px
// ---Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");

renderEl.addEventListener("click", addCreateBoxes);
destroyEl.addEventListener("click", destroyBoxes);

function addCreateBoxes() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    const divSize = 30 + i * 10;
    divEl.setAttribute(
      "style",
      `width: ${divSize}px; height: ${divSize}px; background-color: rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
    );
    fragment.appendChild(divEl);
  }
  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  return (boxesEl.innerHTML = "");
}

function randomInt() {
  return Math.floor(Math.random() * 256);
}
