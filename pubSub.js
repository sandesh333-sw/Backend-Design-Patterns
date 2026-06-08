/**
 * A simple implementation of the Pub/Sub pattern in JavaScript.
 * 
 * What is Pub/Sub?
 * -> A messaging pattern where senders (publishers) send messages without knowing who will receive them (subscribers).
 * -> Subscribers express interest in certain messages and only receive those.
 * -> Decouples the sender and receiver, allowing for more flexible and scalable systems.
 * 
 * Pros: Decoupling of components, scalability, flexibility in message handling
 * Cons: Complexity in managing subscribers, potential for message loss if not handled properly
 * 
 * Example Usage:
 * const pubSub = new PubSub();
 * 
 * function subscriber1(data) {
 *     console.log("Subscriber 1 received:", data);
 * }
 * 
 * function subscriber2(data) {
 *     console.log("Subscriber 2 received:", data);
 * }
 * 
 * pubSub.subscribe("event1", subscriber1);
 * pubSub.subscribe("event1", subscriber2); 
 */
