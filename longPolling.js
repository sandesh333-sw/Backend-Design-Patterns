// Request is taking long, i'll check with you later , but talk to me only when its ready

// Short polling is good but chatty
// Long polling (Kafka uses it)

/**
 * What is Long Polling?
 * Client sends a request -> server responds immediately with a handle ->
 * server continues to process the request -> client uses that handle to check for status
 * 
 * Pros: less chatty and backend friendly, clients can disconnect
 * Cons: No realtime updates, more complex to implement, not suitable for all use cases
 */
const express = require("express");
const app = express();

let message = null;

// Long poll endpoint
app.get("/poll", (req, res) => {
    console.log("Client is waiting...");

    const timer = setTimeout(() => {
        res.json({ message: null });
    }, 30000); // timeout after 30s

    const interval = setInterval(() => {
        if (message) {
            clearTimeout(timer);
            clearInterval(interval);

            res.json({ message });
            message = null;
        }
    }, 1000);
});

// Create new data
app.get("/send/:msg", (req, res) => {
    message = req.params.msg;
    res.send("Message saved");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});