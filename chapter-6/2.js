const price = 3500;

if (price >= 6000) {
  const discount = (price / 100) * 15;
  const pay = price - discount;
  console.log(pay);
} else if (price >= 3000) {
  const discount = (price / 100) * 5;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log(price);
}
