const price = 4000;

if (price >= 5000) {
  const discount = (price / 100) * 15;
  const pay = price - discount;

  console.log("payment amount is:", pay);

} else if (price >= 2500) {
  const discount = (price / 1000) * 5;
  const pay = price - discount;
  console.log("payment amount is:", pay);

} else {
  console.log("payment amount is:", price);
}
