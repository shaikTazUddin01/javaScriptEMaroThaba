const article={
    title:"Learning JS",
    category:"Programming"
}


if ("auth" in article) {
    console.log("auth exists");
}else{
    console.log("Auth not exists");
}