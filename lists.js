const client = require("./client.js");

async function init(){
    await client.lpush("message",1);
    await client.lpush("message",2);
    await client.lpush("message",3);
    await client.lpush("message",4);
    const result = await client.blpop("message")
    console.log("result->",result);
}

init();