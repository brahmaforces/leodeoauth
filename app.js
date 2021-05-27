const express=require('express');
const app =express();


require('custom-env').env('staging')


app.use('/',require('./routes/index'));


const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
