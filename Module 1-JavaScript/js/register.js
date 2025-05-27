import { postRegistration } from './api.js';

export function handleRegistration() {
  const form = document.querySelector("#regForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const event = form.elements["eventSelect"].value;

    if (!name || !email || !event) {
      document.querySelector("#formError").innerText = "All fields required.";
      return;
    }

    const userData = { name, email, event };
    const result = await postRegistration(userData);
    alert(result);
  });
}
