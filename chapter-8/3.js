const profile={
    name:"Rahim",
    age:28,
    city:"Dhaka"
}

const profileKeys=Object.keys(profile)
const hasName=profileKeys.includes("name")
console.log(profileKeys);
console.log(hasName);

if ("email" in profile) {
    console.log("email exists");
}else{
    console.log("NO email here");
}
if (profile.hasOwnProperty("name")) {
    console.log("email niye boroloki dekhabi");
}else{
    console.log("email chara jibon");
}