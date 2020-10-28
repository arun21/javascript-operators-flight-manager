function Passengers() {
  function checkFlightCapacity(capacity, passengers) {
    let total = 0;
    total = passengers.reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (total > capacity) {
      throw new Error("total passengers are more than the capacity");
    }
    if (total < capacity) {
      return total;
    }
  }
  return { checkFlightCapacity };
}

module.exports = Passengers();
