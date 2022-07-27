const form = document.getElementById("form");
const input = document.getElementById("link-input");
const errMsg = document.getElementById("err-msg");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

function menuToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter somthing";
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter valid url";
  } else {
    errMsg.innerHTML = "";
  }
}

btn.addEventListener("click", menuToggle);
form.addEventListener("submit", formSubmit);
