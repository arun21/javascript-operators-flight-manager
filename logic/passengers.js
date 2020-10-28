function Passengers() {
  function checkFlightCapacity(capacity, passengersArray) {
    let total = 0;
    total = passengersArray.reduce((acc, value) => {
      return acc + value;
    });

    if (total < capacity) {
      return total;
    } else {
      throw new Error("total passengers are more than the capacity");
    }
  }
  return checkFlightCapacity();
}

module.exports = Passengers();
