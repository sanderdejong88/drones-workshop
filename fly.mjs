import drone from "./drone.mjs";

const execute = async (...commands) => {
  for (const command of commands) {
    await command();
    console.log("-------------------------------");
  }
};

const drone1 = drone("192.168.8.109", 8889);
drone1.connect();

execute(
  drone1.command.takeoff(),
  //   drone1.command.speed(75),
  //   drone1.command.go(0, 0, 60, 50, 2),
  drone1.command.forward(200),
  drone1.command.right(200),
  drone1.command.backward(200),
  drone1.command.left(200),
  //   drone1.command.align(),
  //   drone1.command.go(0, 0, 150, 50, 7),
  //   drone1.command.right(180),
  //   drone1.command.align(),
  //   drone1.command.backward(420),
  //   drone1.command.align(),
  //   drone1.command.align(),
  drone1.command.land()
)
  .catch((error) => console.log(error))
  .finally(drone1.disconnect);
