/**
 * Server Sent Events
 * One Request, a very long response
 * 
 * What is it?
 * -> A response has start and end
 * -> Client sends a request
 * -> Server sends logical events a part of response
 * -> Server never writes the end of the response
 * -> It is still a request but and unending response
 * -> Client parses the streams data looking for these events
 * -> Works on top of HTTP, so it is compatible with existing infrastructure
 * 
 * Pros: Realtime updates, simple to implement, works with existing infrastructure
 * Cons: Client must be online, Not suitable for all use cases, can be less efficient than WebSockets for bidirectional communication
 */

import express from "express";
const app = express();

let clients = [];

/**
 * SSE Endpoint
 * Client keeps connection open
 */
app.get("/events", (req, res) => {
    // Required headers for SSE
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders?.(); // optional safety for some environments

    // Add client
    clients.push(res);

    console.log("Client connected:", clients.length);

    // Remove client on disconnect
    req.on("close", () => {
        clients = clients.filter(c => c !== res);
        console.log("Client disconnected:", clients.length);
    });
});

/**
 * Send event to all connected clients
 */
app.get("/send/:msg", (req, res) => {
    const message = req.params.msg;

    clients.forEach(client => {
        client.write(`data: ${message}\n\n`);
    });

    res.send("Sent to all clients");
});

app.listen(3000, () => {
    console.log("SSE server running on port 3000");
});