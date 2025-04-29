const phone={
    brand:"Sumsung",
    model:"Inspiron",
    price:8500
}

const keys=Object.keys(phone)

for(const key of keys){
    console.log(key,phone[key]);
}