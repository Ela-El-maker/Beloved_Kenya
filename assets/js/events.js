// assets/js/events.js

const events = [
  {
    title: "Beloved Church General Conference",
    location: "Kakamega PEFA Church",
    startDate: "2025-11-20",
    endDate: "2025-11-22",
    type: "Conference",
    description: "A powerful gathering of ministers and believers to renew strength and receive fresh fire."
  },
  {
    title: "General Conference — Kitale",
    location: "Kitale PEFA Church",
    startDate: "2025-05-15",
    endDate: "2025-05-17",
    type: "Conference",
    description: "A time of revival and impartation for all church leaders and members."
  },
  {
    title: "Private Seminar — Eldoret",
    location: "Eldoret",
    startDate: "2025-07-10",
    endDate: "2025-07-11",
    type: "Seminar",
    description: "A private leadership seminar focusing on spiritual growth and leadership ethics."
  },
  {
    title: "Private Seminar — Kisumu",
    location: "Kisumu",
    startDate: "2025-08-14",
    endDate: "2025-08-15",
    type: "Seminar",
    description: "A spiritual retreat for ministers and workers to refresh in God’s presence."
  }
];

// Function to render events
function renderEvents() {
  const today = new Date();
  const upcomingContainer = document.querySelector("#upcoming-events");
  const pastContainer = document.querySelector("#past-events");

  upcomingContainer.innerHTML = "";
  pastContainer.innerHTML = "";

  events.forEach(event => {
    const endDate = new Date(event.endDate);
    const isPast = endDate < today;

    const eventHTML = `
      <div class="event-card ${isPast ? 'past' : 'upcoming'}">
        <h3>${event.title}</h3>
        <p><strong>Type:</strong> ${event.type}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Dates:</strong> ${event.startDate} → ${event.endDate}</p>
        <p>${event.description}</p>
      </div>
    `;

    if (isPast) {
      pastContainer.innerHTML += eventHTML;
    } else {
      upcomingContainer.innerHTML += eventHTML;
    }
  });
}

document.addEventListener("DOMContentLoaded", renderEvents);
