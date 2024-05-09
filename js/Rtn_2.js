// Create a new WebSocket connection
const ws = new WebSocket('ws://localhost:3000');

// Handle WebSocket connection open
ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

// Handle incoming messages (notifications)
ws.onmessage = (event) => {
    const notification = JSON.parse(event.data);
    console.log('Received notification:', notification);

    // Display the notification in the admin panel
    displayNotification(notification);
};

// Handle WebSocket connection close
ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

// Display a notification in the admin panel
function displayNotification(notification) {
    // Create a new element to display the notification
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');
    notificationElement.textContent = `${notification.timestamp} - ${notification.message}`;

    // Append the notification to the admin panel
    const notificationContainer = document.getElementById('notification-container');
    notificationContainer.appendChild(notificationElement);
}

// console.log("dhjejjj");