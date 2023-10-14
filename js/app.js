// 3D Scroll

let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

function redirectToWhatsApp() {
  window.location.href = "https://api.whatsapp.com/send?phone=+5219841647261";
}

// Функция для перехода на Instagram
function redirectToInstagram() {
  window.location.href =
    "https://www.instagram.com/na_luum_madretierra/?igshid=OGQ5ZDc2ODk2ZA%3D%3D";
}

// Добавляем кнопку "Связаться" (WhatsApp)
let whatsappButton = document.createElement("a");
whatsappButton.setAttribute(
  "href",
  "https://api.whatsapp.com/send?phone=+5219841647261"
);
whatsappButton.setAttribute("target", "_blank");
whatsappButton.innerText = "Связаться";
whatsappButton.classList.add("contact-button");

// Добавляем кнопку "Смотреть фото" (Instagram)
let instagramButton = document.createElement("a");
instagramButton.setAttribute(
  "href",
  "https://www.instagram.com/na_luum_madretierra/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
);
instagramButton.setAttribute("target", "_blank");
instagramButton.innerText = "Смотреть фото";
instagramButton.classList.add("photo-button");

// Находим элемент, где сейчас находится надпись "© WebDesign Master"
let copyRightElement = document.querySelector(".frame__content");
copyRightElement.innerHTML = ""; // Очищаем содержимое

// Добавляем кнопки в это место
copyRightElement.appendChild(whatsappButton);
copyRightElement.appendChild(instagramButton);

document.addEventListener("DOMContentLoaded", function () {
  // Создаем кнопку "Связаться" (WhatsApp)
  let whatsappButton = document.createElement("a");
  whatsappButton.setAttribute(
    "href",
    "https://api.whatsapp.com/send?phone=+5219841647261"
  );
  whatsappButton.setAttribute("target", "_blank");
  whatsappButton.innerText = "Связаться";
  whatsappButton.classList.add("contact-button");

  // Создаем кнопку "Смотреть фото" (Instagram)
  let instagramButton = document.createElement("a");
  instagramButton.setAttribute(
    "href",
    "https://www.instagram.com/na_luum_madretierra/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
  );
  instagramButton.setAttribute("target", "_blank");
  instagramButton.innerText = "Смотреть фото";
  instagramButton.classList.add("photo-button");

  // Находим элемент, где сейчас находится надпись "© WebDesign Master"
  let copyRightElement = document.querySelector(".frame__content");

  // Функция, чтобы добавить кнопки только в конце страницы
  function addButtonsAtEnd() {
    let scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Если пользователь проскролил в конец страницы
    if (scrollPosition + windowHeight >= document.body.offsetHeight) {
      // Очищаем содержимое
      copyRightElement.innerHTML = "";

      // Добавляем кнопки в это место
      copyRightElement.appendChild(whatsappButton);
      copyRightElement.appendChild(instagramButton);
    }
  }

  // Вызываем функцию при загрузке и скролле
  addButtonsAtEnd();
  window.addEventListener("scroll", addButtonsAtEnd);
});
