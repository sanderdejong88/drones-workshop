import drone from "./drone.mjs";

const drone1 = drone("192.168.10.1", 8889);

drone1.connect();
await drone1.setWifi("drones_wifi", "drones_wifi");
await drone1.disconnect();

console.log("Connected to wifi");
