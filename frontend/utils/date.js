export const formatMessageTime = (createdAt) => {
    const date = new Date(createdAt); // Create a Date object from the timestamp
    const options = { hour: '2-digit', minute: '2-digit', hour12: true }; // Define formatting options
    return date.toLocaleTimeString([], options); // Return formatted time string
};
