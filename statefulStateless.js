/**
 * Stateful vs Stateless backend
 * Stateful backend: A stateful backend maintains the state of the application across multiple requests. It can store user sessions, cache data, and manage resources effectively. This allows for a more personalized and efficient user experience, as the backend can remember user preferences and interactions.
 * it stores state about clients in its memory, depends on the information being there
 * 
 * Stateless: Client is reponsible to "transfer the state" with every request
 * Can still store data somewhere else
 * Can you restart the backend during idle time while the client workflow continues to work?
 * 
 * Tcp is stateful, http, udp is stateless
 * 
 * 
 */