const fs = require('fs');
const path = require('path');

const eventsFile = path.join(__dirname, '../data/events.json');
let events = JSON.parse(fs.readFileSync(eventsFile, 'utf-8'));

function getEvents() {
    return events;
}

function addEvent(event) {
    event.id = events.length + 1;
    events.push(event);
    fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2));
}

function getUpcomingEvents() {
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Simple authentication (basic if-else check)
function authenticateUser(username, password) {
    const users = { admin: "1234", user: "abcd" };
    return users[username] === password;
}

module.exports = { getEvents, addEvent, getUpcomingEvents, authenticateUser };
