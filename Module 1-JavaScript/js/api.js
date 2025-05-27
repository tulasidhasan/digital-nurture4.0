export async function fetchEvents() {
  try {
    document.querySelector("#loading").style.display = "block";
    const res = await fetch("./data/events.json");
    const data = await res.json();
    document.querySelector("#loading").style.display = "none";
    return data;
  } catch (err) {
    console.error("Error fetching events:", err);
  }
}

export function postRegistration(userData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Submitted:", userData);
      resolve("Registration successful!");
    }, 2000);
  });
}
