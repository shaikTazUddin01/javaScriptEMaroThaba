const computer={
    brand:"Lenovo",
    price:35000,
    processor:"intel",
    ssd:'512gs'
}

const keys=Object.keys(computer)

const hasPrice=keys.includes("price")

console.log(hasPrice);