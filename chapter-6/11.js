const isAccountActive=true;
const isPremium=true

if (isAccountActive) {
    console.log("check subscription");
    if (isPremium) {
        console.log("show premium content");
    }else{
        console.log("show free version");
    }
}else{
    console.log("Account haven't active");
}