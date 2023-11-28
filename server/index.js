    const express = require('express'), 
    app = express(),
    mongoose = require('mongoose')

    const clientRoute = require('./routes/clientRoute')
    const providerRoute = require('./routes/providerRoute')


app.use(express.urlencoded({extended:true}))
app.use(express.json())

async function connecting(){
    try {
        await mongoose.connect('mongodb+srv://kerken:axwa03K96f9B4Vey@cluster0.fxscq2r.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
    }


    app.use('/client', require('./routes/clientRoute'));
    app.use('/provider', require('./routes/providerRoute'));

connecting().then(()=>{
    app.listen(4001, () => console.log(`listening on port 4001`))
})