window.onbeforeunload = function () {
    return "You have unsaved changes!";
};

function saveEventPreference() {
    const eventType = document.getElementById("eventType").value;
    localStorage.setItem("preferredEvent", eventType);
}

function loadEventPreference() {
    const saved = localStorage.getItem("preferredEvent");
    if (saved) {
        document.getElementById("eventType").value = saved;
    }
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences cleared!");
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("formOutput").innerText = "Registration submitted!";
}

function countCharacters(textarea) {
    const count = textarea.value.length;
    console.log("Character count:", count);
}

function showVideoReady() {
    document.getElementById("videoStatus").innerText = "Video ready to play";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                document.getElementById("geoLocation").innerText = coords;
            },
            (error) => {
                document.getElementById("geoLocation").innerText = "Location not found. Allow access.";
            },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    } else {
        document.getElementById("geoLocation").innerText = "Geolocation not supported.";
    }
}

// Auto-load stored event type on page load
window.onload = loadEventPreference;
