const { getEvents, addEvent, getUpcomingEvents, authenticateUser } = require('./events');

console.log("Current Events:", getEvents());

addEvent({
    name: "Doctor Appointment",
    description: "Annual health check-up",
    date: "2025-03-20",
    time: "02:00 PM",
    category: "Appointments",
    reminder: "2025-03-20T13:30:00Z"
});

console.log("Updated Events:", getUpcomingEvents());

// Test authentication
console.log("User authentication (valid user):", authenticateUser("admin", "1234")); // true
console.log("User authentication (invalid user):", authenticateUser("user", "wrongpass")); // false
