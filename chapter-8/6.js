const book = {
  name: "MarHaba Javascript e maro thaba",
  write: "Jhankar mahabub",
  price: "650 Taka",
};

const keys = Object.keys(book);

for (const key of keys) {
  console.log(key, book[key]);
}
