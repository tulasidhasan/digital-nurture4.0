// Event class
class Event {
  constructor(name, date, seats, category, location) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
    this.location = location;
  }

  checkAvailability() {
    return this.seats > 0 && this.date > new Date();
  }
}

// Event prototype method
Event.prototype.register = function () {
  if (this.seats > 0) {
    this.seats--;
    return true;
  } else {
    throw new Error("No seats available!");
  }
};

// Event list
export let events = [
  new Event("Music Fest", "2025-07-10", 25, "Music", "Chennai"),
  new Event("Tech Talk", "2025-06-01", 0, "Tech", "Bangalore"),
  new Event("Cooking Class", "2025-08-15", 15, "Workshop", "Mumbai")
];

// Add event
export function addEvent(event) {
  events.push(event);
}

// Filter by category
export function filterEventsByCategory(category, callback) {
  return callback(events, category);
}

// Sample callback
export const filterCallback = (list, category) => {
  return list.filter(e => e.category === category);
};

// Map to display card title
export function getEventTitles() {
  return events.map(e => `${e.category} - ${e.name}`);
}
