import { events } from './events.js';

// Render event cards
export function renderEventList(eventList = events) {
  const container = document.querySelector("#eventList");
  container.innerHTML = "";

  eventList.forEach((event, index) => {
    if (event.checkAvailability()) {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>${event.date.toDateString()}</p>
        <p>Seats: ${event.seats}</p>
        <p>Category: ${event.category}</p>
        <button onclick="register(${index})">Register</button>
      `;
      container.appendChild(card);
    }
  });
}

// Filter category on change
document.querySelector("#categoryFilter").onchange = (e) => {
  const category = e.target.value;
  import('./events.js').then(mod => {
    const filtered = mod.filterEventsByCategory(category, mod.filterCallback);
    renderEventList(filtered);
  });
};

// Keydown quick search
document.querySelector("#searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.toLowerCase();
    const results = events.filter(ev => ev.name.toLowerCase().includes(query));
    renderEventList(results);
  }
});
// jQuery Example (can go in ui.js or jquery.js)
$('#registerBtn').click(function () {
  $('#confirmationMsg').fadeIn().delay(2000).fadeOut();
});

// Framework Advantage
// React lets you manage complex UIs with state management, components, and routing,
// making the app more scalable and testable.
