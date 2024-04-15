import drone from "./drone.mjs";

const execute = async (...commands) => {
  for (const command of commands) {
    await command();
    console.log("-------------------------------");
  }
};

const drone1 = drone("192.168.8.120", 8889);
drone1.connect();

execute(
  drone1.command.takeoff(),
  //   drone1.command.speed(75),
  //   drone1.command.go(0, 0, 60, 50, 2),
  //   drone1.command.forward(300),
  //   drone1.command.align(),
  //   drone1.command.go(0, 0, 150, 50, 7),
  //   drone1.command.right(180),
  //   drone1.command.align(),
  //   drone1.command.backward(420),
  //   drone1.command.align(),
  //   drone1.command.align(),
  drone1.command.land()
).then(drone1.disconnect);
