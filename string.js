const client = require("./client.js");

async function init(){
    await client.set("msg:6", "Hello, World!");
    const result = await client.get("msg:6")
    console.log("result->",result);
}

init();