import helper from "./helper.js";
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  if (helper.validateEmail(document.querySelector("#email").value)) {
    alert("Thank you for registering with us!");
  } else {
    alert("Please enter a valid email address");
  }
});
