export function GetSuccessRents(Number) {
  const rentNumber = parseInt(Number);

  switch (rentNumber) {
    case rentNumber < 10:
      return rentNumber;
    case rentNumber < 100:
      return parseInt(rentNumber / 10) * 10;
    case rentNumber < 1000:
      return parseInt(rentNumber / 100) * 100;
    case rentNumber < 10000:
      return parseInt(rentNumber / 1000) * 1000;
    case rentNumber < 100000:
      return parseInt(rentNumber / 10000) * 10000;
    default:
      return rentNumber;
  }
}
