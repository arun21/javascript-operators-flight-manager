function Flights() {
  function calculateNumberOfFlights(no_of_pasengers, flight_capacity) {
    let no_of_flights;

    if (no_of_pasengers < 0) {
      throw new Error(
        "The number of passengers must be a positive integer value"
      );
    }

    if (flight_capacity < 0) {
      throw new Error(
        "The capacity of the flight must be a positive integer value"
      );
    }
    if (no_of_pasengers % flight_capacity == 0) {
      no_of_flights = no_of_pasengers / flight_capacity;
    } else {
      no_of_flights = Math.floor(no_of_pasengers / flight_capacity) + 1;
    }
    return no_of_flights;
  }

  function checkAircraftRevision(distance_limit, distances) {
    let total_distance = distances.reduce((acc, value) => {
      return acc + value;
    });

    if (total_distance > distance_limit) {
      throw new Error("Total distance is greater than distance limit");
    }

    if (total_distance == distance_limit / 2) {
      return "The revision needs to be done within the next 3 months";
    } else if (
      total_distance > distance_limit / 2 &&
      total_distance <= (3 / 4) * distance_limit
    ) {
      return "The revision needs to be done within the next 2 months";
    } else if (
      total_distance > (3 / 4) * distance_limit &&
      total_distance <= distance_limit
    ) {
      return "The revision needs to be done within the next month";
    }
  }
  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
