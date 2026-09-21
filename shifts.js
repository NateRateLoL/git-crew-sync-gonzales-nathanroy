function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  //Proper formula for test 4
  if (hours <= 8) {
    return Math.floor(hours * rate);
  }
  
  const regular = 8 * rate;
  const overtime = (hours - 8) * rate * 1.5;

  return Math.floor(regular + overtime);
}

module.exports = { isValidShift, calculatePay };
