const express=require('express');
const app =express();
require("./src/db/conn");
app.use(express.static(__dirname));

const server=app.listen(80,()=>{
    const host=server.address().address;
    const port=server.address().port; 

    console.log('app is listenting at http://%s:%s',host,port);
});