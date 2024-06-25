const compareArrivalTimeAndDepartureTime = (
  arrivalTimeString,
  departureTimeString
) => {
  const arrivalTime = new Date(arrivalTimeString);
  const departureTime = new Date(departureTimeString);
  return arrivalTime > departureTime;
};

module.exports = {
  compareArrivalTimeAndDepartureTime,
};
