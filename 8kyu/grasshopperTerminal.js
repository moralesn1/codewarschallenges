// Create a combat function that takes the player's current health and the amount of
// damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  health = health - damage;
  return health >= 0 ? health : 0;
}

combat(100, 5), 95;
combat(92, 8), 84;
combat(20, 30), 0, "Health cannot go below 0";
